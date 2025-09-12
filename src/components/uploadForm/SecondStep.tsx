import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io";
import ImageUpload from "./ImageUpload";
import { uploadFormContext } from "@src/context/uploadForm";
import { useI18n } from "@src/hooks";
import { classifyIndiceQ } from "@src/utils/functions";

// Definición de campos del template player
const playerFields: Array<{
  key: string;
  label: string;
  type?: string;
  placeholder?: string;
  optional?: boolean;
  derived?: boolean; // campo calculado automáticamente (no editable)
}> = [
  { key: "nombre", label: "Nombre" },
  { key: "apellido", label: "Apellido" },
  { key: "edad", label: "Edad", type: "number" },
  { key: "peso", label: "Peso (kg)", type: "number" },
  { key: "altura", label: "Altura (cm)", type: "number" },
  { key: "sexo", label: "Sexo (M/F)" },
  { key: "clase", label: "Clase (Año)", derived: true },
  { key: "fechaNacimiento", label: "Fecha Nacimiento (DD/MM/YYYY)" },
  { key: "alturaTorso", label: "Altura Torso (cm)", type: "number" },
  {
    key: "envergaduraBrazos",
    label: "Envergadura Brazos (cm)",
    type: "number",
  },
  { key: "alturaDeVuelo", label: "Altura de Vuelo", type: "number" },
  { key: "tiempoDeContacto", label: "Tiempo de Contacto (ds)", type: "number" },
  { key: "imc", label: "IMC", type: "number", derived: true },
  { key: "tmb", label: "TMB", type: "number", derived: true },
  { key: "indiceQ", label: "Índice Q", optional: true, derived: true },
  { key: "biotipo", label: "Biotipo" },
  { key: "lateralidad", label: "Lateralidad" },
  { key: "ojoDirector", label: "Ojo Director" },
  { key: "hombro", label: "Hombro" },
  { key: "brazoDirector", label: "Brazo Director" },
  { key: "cintura", label: "Cintura" },
  { key: "piernaDominante", label: "Pierna Dominante" },
  { key: "piernaDirectora", label: "Pierna Directora" },
  {
    key: "dorsiflexionTobilloIzq",
    label: "Dorsiflexión Tobillo Izq",
  },
  {
    key: "dorsiflexionTobilloDer",
    label: "Dorsiflexión Tobillo Der",
  },
  { key: "posicion", label: "Posición" },
  { key: "localidad", label: "Localidad" },
  { key: "provincia", label: "Provincia" },
  { key: "escuelaClub", label: "Escuela / Club", optional: true },
  { key: "contacto", label: "Contacto (email / tel)" },
  { key: "deporte", label: "Deporte" },
  {
    key: "manoDer",
    label: "Hand Grip Der. (kg)",
    type: "number",
  },
  {
    key: "manoIzq",
    label: "Hand Grip Izq. (kg)",
    type: "number",
  },
  { key: "sentadillaProfunda", label: "Sentadilla Profunda" },
  {
    key: "capacidadPulmonarTotal",
    label: "Capacidad Pulmonar Total",
  },
  { key: "coordinacion", label: "Coordinación" },
  {
    key: "capacidadPulmunarResidual",
    label: "Capacidad Pulmunar Residual",
  },
];

// Campos para Club (placeholder)
const clubFields: Array<{ key: string; label: string; optional?: boolean }> = [
  { key: "nombreClub", label: "Nombre Club" },
  { key: "ciudad", label: "Ciudad" },
  { key: "direccion", label: "Dirección" },
  { key: "telefono", label: "Teléfono", optional: true },
  { key: "email", label: "Email", optional: true },
  { key: "presidente", label: "Presidente" },
  { key: "fechaFundacion", label: "Fecha Fundación", optional: true },
];

// Validaciones basadas en excelProcessor
const validatePlayerForm = (
  data: Record<string, any>
): Record<string, string> => {
  const errors: Record<string, string> = {};
  const num = (v: any) =>
    v === "" || v === null || v === undefined ? NaN : Number(v);
  const yearNow = new Date().getFullYear();
  const inSet = (val: string, arr: string[]) => arr.includes(val);
  const parseDate = (str: string) => {
    const m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
    if (!m) return null;
    let y = parseInt(m[3], 10);
    if (m[3].length === 2) {
      const cy = yearNow % 100;
      y = y <= cy ? 2000 + y : 1900 + y;
    }
    const d = parseInt(m[1], 10);
    const mo = parseInt(m[2], 10);
    const date = new Date(y, mo - 1, d);
    if (
      date.getFullYear() !== y ||
      date.getMonth() !== mo - 1 ||
      date.getDate() !== d ||
      y < 1900 ||
      y > yearNow
    )
      return null;
    return { d, mo, y };
  };
  const calcAge = (str: string) => {
    const p = parseDate(str);
    if (!p) return NaN;
    const today = new Date();
    let age = today.getFullYear() - p.y;
    const md = today.getMonth() - (p.mo - 1);
    if (md < 0 || (md === 0 && today.getDate() < p.d)) age--;
    return age;
  };

  // Required basic: all playerFields except derived ones and `escuelaClub` (only escuelaClub may be empty)
  const requiredKeys = playerFields
    .filter((f) => !f.derived && f.key !== "escuelaClub")
    .map((f) => f.key);
  requiredKeys.forEach((k) => {
    // protect against non-string values
    if (!String(data[k] ?? "").trim()) errors[k] = "Requerido";
  });

  const edad = num(data.edad);
  if (isNaN(edad) || edad < 1 || edad > 100) errors.edad = "Edad 1-100";
  const peso = num(data.peso);
  if (isNaN(peso) || peso <= 0 || peso > 300) errors.peso = "Peso 1-300";
  const altura = num(data.altura);
  if (isNaN(altura) || altura < 50 || altura > 250)
    errors.altura = "Altura 50-250";
  const alturaTorso = num(data.alturaTorso);
  if (isNaN(alturaTorso) || alturaTorso <= 0 || alturaTorso > 150)
    errors.alturaTorso = "1-150";
  const enverg = num(data.envergaduraBrazos);
  if (isNaN(enverg) || enverg <= 0 || enverg > 300)
    errors.envergaduraBrazos = "1-300";
  const alturaDeVuelo = num(data.alturaDeVuelo);
  if (!isNaN(alturaDeVuelo) && alturaDeVuelo !== 0) {
    // Permitir enteros (centésimos) o decimales reales. Rango amplio 0 - 1000 como en Excel template.
    if (alturaDeVuelo < 0 || alturaDeVuelo > 1000)
      errors.alturaDeVuelo = "0-1000";
  }
  const tiempoDeContacto = num(data.tiempoDeContacto);
  if (!isNaN(tiempoDeContacto) && tiempoDeContacto !== 0) {
    if (tiempoDeContacto < 0 || tiempoDeContacto > 1000)
      errors.tiempoDeContacto = "0-1000";
  }
  const imc = num(data.imc);
  if (isNaN(imc) || imc < 10 || imc > 50) errors.imc = "IMC 10-50";
  const tmb = num(data.tmb);
  if (isNaN(tmb) || tmb < 500 || tmb > 4000) errors.tmb = "TMB 500-4000";

  const sexo = String(data.sexo ?? "").trim();
  if (sexo && !inSet(sexo.toUpperCase(), ["M", "F"])) errors.sexo = "M o F";
  else if (!sexo) errors.sexo = "Requerido";

  const biotipo = String(data.biotipo ?? "").trim();
  if (
    biotipo &&
    !inSet(biotipo.toLowerCase(), ["ectomorfo", "mesomorfo", "endomorfo"])
  )
    errors.biotipo = "Ecto/Meso/Endomorfo";

  const lateralidad = String(data.lateralidad ?? "").trim();
  if (
    lateralidad &&
    !inSet(lateralidad.toLowerCase(), ["cruzado", "homogenio"])
  )
    errors.lateralidad = "cruzado/homogenio";

  const sideCheck = (v: string) =>
    !v || inSet(v.toLowerCase(), ["izq.", "der.", "izq", "der"]);
  [
    "ojoDirector",
    "hombro",
    "brazoDirector",
    "cintura",
    "piernaDominante",
    "piernaDirectora",
  ].forEach((k) => {
    const v = String(data[k] ?? "").trim();
    if (v && !sideCheck(v)) errors[k] = "Izq./Der.";
  });

  const clase = String(data.clase ?? "").trim();
  if (clase && !/^\d{4}$/.test(clase)) errors.clase = "Año 4 dígitos";
  else if (clase) {
    const y = parseInt(clase, 10);
    if (y < 1900 || y > yearNow) errors.clase = `1900-${yearNow}`;
  }

  const fnac = String(data.fechaNacimiento ?? "").trim();
  if (fnac) {
    if (!parseDate(fnac)) errors.fechaNacimiento = "Formato DD/MM/YYYY";
    else {
      const calc = calcAge(fnac);
      if (!isNaN(calc) && Math.abs(calc - edad) > 1)
        errors.fechaNacimiento = `No coincide edad (${calc})`;
    }
  }

  const localidad = String(data.localidad ?? "").trim();
  if (localidad && localidad.length < 2) errors.localidad = ">=2 chars";
  const escuelaClub = String(data.escuelaClub ?? "").trim();
  if (escuelaClub && escuelaClub.length < 3) errors.escuelaClub = ">=3 chars";
  const deporte = String(data.deporte ?? "").trim();
  if (deporte && deporte.length < 3) errors.deporte = ">=3 chars";

  const contacto = String(data.contacto ?? "").trim();
  if (contacto) {
    // Simple heuristic validation
    const parts = contacto
      .split("/")
      .map((p: string) => String(p || "").trim());
    const valid = parts.some(
      (p: string) => p.includes("@") || /\d{6,}/.test(p)
    );
    if (!valid) errors.contacto = "Email o Tel válido";
  }

  // Campos A-D opcionales (si tienen valor debe ser A-D)
  const ADAllowed = ["A", "B", "C", "D", "a", "b", "c", "d", ""]; // vacío permitido
  [
    "dorsiflexionTobilloIzq",
    "dorsiflexionTobilloDer",
    "sentadillaProfunda",
    "capacidadPulmonarTotal",
    "coordinacion",
    "capacidadPulmunarResidual",
  ].forEach((k) => {
    const v = String(data[k] ?? "").trim();
    if (v && !ADAllowed.includes(v)) errors[k] = "Valor A-D";
  });

  // Longitud libre para indiceQ (<=30). manoDer/manoIzq son numéricos (kg)
  const idx = String(data.indiceQ ?? "").trim();
  if (idx && idx.length > 30) errors.indiceQ = "<=30 chars";

  return errors;
};

// Validación para formulario de Club basada en excelProcessor (mínima)
const validateClubForm = (
  data: Record<string, any>
): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (!String(data.nombreClub ?? "").trim()) errors.nombreClub = "Requerido";
  const email = String(data.email ?? "").trim();
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errors.email = "Email inválido";
  }
  return errors;
};

export const SecondStep = () => {
  const { typeForm, handleSetTypeForm, handleUploadForm, handleSetStepForm } =
    useContext(uploadFormContext);
  const { t } = useI18n();
  const { push } = useRouter();

  // Estado del formulario player
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    const init: Record<string, any> = {};
    playerFields.forEach((f) => (init[f.key] = ""));
    return init;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [playerImage, setPlayerImage] = useState<File | null>(null);
  const [indiceQCategoria, setIndiceQCategoria] = useState<string>("");
  const [indiceQValorRango, setIndiceQValorRango] = useState<string>("");
  const [playerValue, setPlayerValue] = useState<number>(0);
  const [capacidadCategoria, setCapacidadCategoria] = useState<string>("");
  const [capacidadValorRango, setCapacidadValorRango] = useState<string>("");
  const [capResidualCategoria, setCapResidualCategoria] = useState<string>("");
  const [capResidualValorRango, setCapResidualValorRango] =
    useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isPlayer = !typeForm || typeForm === "player";
  const isClub = typeForm === "club";

  const resetFormForType = (target: string) => {
    if (target === "player") {
      const init: Record<string, any> = {};
      playerFields.forEach((f) => (init[f.key] = ""));
      setFormData(init);
    } else if (target === "club") {
      const init: Record<string, any> = {};
      clubFields.forEach((f) => (init[f.key] = ""));
      setFormData(init);
    } else {
      setFormData({});
    }
    setErrors({});
    setPlayerImage(null);
    setPlayerValue(0);
  };

  const handleProcessedImage = async (blob: Blob | null) => {
    if (!blob) {
      // limpiar si no hay blob
      setPlayerImage(null);
      return;
    }

    // Convertir Blob en File para la imagen del jugador
    const f = new File([blob], "processed.png", {
      type: blob.type || "image/png",
    });
    setPlayerImage(f);
  };

  const handleChangeField = (key: string, value: any) => {
    setFormData((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  };

  // Recalcular campos derivados (IMC, TMB, Clase e Índice Q + clasificación)
  useEffect(() => {
    // Solo si es formulario de player
    if (!isPlayer) return;
    setFormData((prev) => {
      const next = { ...prev };
      const peso = parseFloat(String(prev.peso).replace(",", "."));
      const alturaCm = parseFloat(String(prev.altura).replace(",", "."));
      const edad = parseInt(prev.edad, 10);
      const sexo = String(prev.sexo || "")
        .trim()
        .toUpperCase();

      // IMC = peso / (altura_m ^2)
      if (!isNaN(peso) && !isNaN(alturaCm) && alturaCm > 0) {
        const alturaM = alturaCm / 100;
        const imc = peso / (alturaM * alturaM);
        next.imc = imc ? Number(imc.toFixed(2)) : "";
      } else {
        next.imc = "";
      }

      // TMB (Mifflin-St Jeor)
      if (
        !isNaN(peso) &&
        !isNaN(alturaCm) &&
        !isNaN(edad) &&
        edad > 0 &&
        (sexo === "M" || sexo === "F")
      ) {
        const base = 10 * peso + 6.25 * alturaCm - 5 * edad;
        const tmb = sexo === "M" ? base + 5 : base - 161;
        next.tmb = tmb ? Math.round(tmb) : "";
      } else {
        next.tmb = "";
      }
      // Clase (año de nacimiento estimado) desde edad si no existe fechaNacimiento validada todavía
      if (!isNaN(edad) && edad > 0) {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - edad;
        next.clase = String(birthYear);
      } else {
        next.clase = "";
      }

      // Índice Q = alturaDeVuelo / tiempoDeContacto (Excel logic: auto-detect decimals)
      // Altura: Si tiene decimales, usar directo; si entero, dividir por 100 (centésimos -> metros)
      // Tiempo: Si tiene decimales, usar directo; si entero, dividir por 10 (décimas -> segundos)
      const rawAlt = parseFloat(String(prev.alturaDeVuelo).replace(",", "."));
      const rawTiempo = parseFloat(
        String(prev.tiempoDeContacto).replace(",", ".")
      );
      if (!isNaN(rawAlt) && rawAlt > 0 && !isNaN(rawTiempo) && rawTiempo > 0) {
        // Altura: IF(MOD(valor,1)<>0, valor, valor/100) - enteros como centésimos
        const alturaReal = rawAlt % 1 !== 0 ? rawAlt : rawAlt / 100;
        // Tiempo: IF(MOD(valor,1)<>0, valor, valor/10) - enteros como décimas de segundo
        const tiempoReal = rawTiempo % 1 !== 0 ? rawTiempo : rawTiempo / 10;
        const indiceQ = alturaReal / tiempoReal;
        next.indiceQ = Number(indiceQ.toFixed(2));
      } else {
        next.indiceQ = "";
      }

      return next;
    });
  }, [
    formData.peso,
    formData.altura,
    formData.edad,
    formData.sexo,
    formData.alturaDeVuelo,
    formData.tiempoDeContacto,
    isPlayer,
  ]);

  // Clasificación de Índice Q (depende de indiceQ y sexo)
  useEffect(() => {
    if (!isPlayer) return;
    const val = formData.indiceQ;
    const sexo = String(formData.sexo || "").toUpperCase();
    if (val !== "" && (sexo === "M" || sexo === "F")) {
      const cls = classifyIndiceQ(val, sexo);
      setIndiceQCategoria(cls.categoria);
      setIndiceQValorRango(cls.valorRangoStr);

      // Calcular valor monetario del jugador
      // Si valorMin es 0, usar valorMax; si valorMin > 0, usar valorMin
      const monetaryValue = cls.valorMin === 0 ? cls.valorMax : cls.valorMin;
      setPlayerValue(monetaryValue);
    } else {
      setIndiceQCategoria("");
      setIndiceQValorRango("");
      setPlayerValue(0);
    }
  }, [
    formData.peso,
    formData.altura,
    formData.edad,
    formData.sexo,
    formData.alturaDeVuelo,
    formData.tiempoDeContacto,
    isPlayer,
    formData.indiceQ,
  ]);

  // Clasificación para Capacidad Pulmonar Total: depende de la opción A-D y del sexo
  useEffect(() => {
    if (!isPlayer) return;
    const grade = String(formData.capacidadPulmonarTotal || "").toUpperCase();
    const sexo = String(formData.sexo || "").toUpperCase();
    if (!grade || !["A", "B", "C", "D"].includes(grade)) {
      setCapacidadCategoria("");
      setCapacidadValorRango("");
      return;
    }
    const mapping: Record<
      string,
      { categoria: string; ranges: { M: string; F: string } }
    > = {
      A: { categoria: "Óptimo", ranges: { M: "≥90 seg", F: "≥70 seg" } },
      B: { categoria: "Bueno", ranges: { M: "70-89 seg", F: "55-69 seg" } },
      C: { categoria: "Regular", ranges: { M: "45-69 seg", F: "35-54 seg" } },
      D: { categoria: "Bajo", ranges: { M: "<45 seg", F: "<35 seg" } },
    };
    const item = mapping[grade];
    let range = "";
    if (sexo === "M") range = item.ranges.M;
    else if (sexo === "F") range = item.ranges.F;
    else range = ""; // no mostrar rango cuando sexo no está seleccionado
    setCapacidadCategoria(item.categoria);
    setCapacidadValorRango(range);
  }, [formData.capacidadPulmonarTotal, formData.sexo, isPlayer]);

  // Clasificación para Capacidad Pulmunar Residual: depende de la opción A-D y del sexo
  useEffect(() => {
    if (!isPlayer) return;
    const grade = String(
      formData.capacidadPulmunarResidual || ""
    ).toUpperCase();
    const sexo = String(formData.sexo || "").toUpperCase();
    if (!grade || !["A", "B", "C", "D"].includes(grade)) {
      setCapResidualCategoria("");
      setCapResidualValorRango("");
      return;
    }
    const mapping: Record<
      string,
      { categoria: string; ranges: { M: string; F: string } }
    > = {
      A: { categoria: "Óptimo", ranges: { M: "≥35 seg", F: "≥30 seg" } },
      B: { categoria: "Bueno", ranges: { M: "25-34 seg", F: "20-29 seg" } },
      C: { categoria: "Regular", ranges: { M: "15-24 seg", F: "10-19 seg" } },
      D: { categoria: "Bajo", ranges: { M: "<15 seg", F: "<10 seg" } },
    };
    const item = mapping[grade];
    let range = "";
    if (sexo === "M") range = item.ranges.M;
    else if (sexo === "F") range = item.ranges.F;
    else range = ""; // no mostrar rango cuando sexo no está seleccionado
    setCapResidualCategoria(item.categoria);
    setCapResidualValorRango(range);
  }, [formData.capacidadPulmunarResidual, formData.sexo, isPlayer]);

  const handleSave = async () => {
    if (isPlayer) {
      setIsLoading(true);
      try {
        const vErrors = validatePlayerForm(formData);
        if (Object.keys(vErrors).length > 0) {
          setErrors(vErrors);
          toast.error("Revisa los campos");
          return;
        }
        const payload: any = { ...formData };
        // Agregar el valor monetario calculado del jugador
        payload.value = playerValue;
        if (playerImage) payload.file = playerImage;

        const ok = await handleUploadForm(payload);
        if (ok) {
          toast.success("Jugador creado");
          setFormData(() => {
            const init: Record<string, any> = {};
            playerFields.forEach((f) => (init[f.key] = ""));
            return init;
          });
          setPlayerImage(null);
          setPlayerValue(0);
          setErrors({});
          push("/");
        }
      } catch (e) {
        toast.error("Error al guardar");
      } finally {
        setIsLoading(false);
      }
    } else if (isClub) {
      setIsLoading(true);
      try {
        const vErrors = validateClubForm(formData);
        if (Object.keys(vErrors).length > 0) {
          setErrors(vErrors);
          toast.error("Revisa los campos");
          return;
        }
        // Placeholder: aún no implementado guardado real de club
        toast.success("Validación club OK (guardar pendiente)");
      } catch (e) {
        toast.error("Error al guardar");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleTypeSelect = (value: string) => {
    const v = value && value !== "null" ? value : "";
    handleSetTypeForm(v as any);
    resetFormForType(v);
  };

  return (
    <>
      <div className="w-full md:w-auto flex flex-col gap-3 flex-1">
        <button
          className="bg-transparent flex items-center gap-1 text-gray-200 hover:text-white transition-colors outline-none"
          onClick={() => handleSetStepForm(1)}
        >
          <IoIosArrowBack />
          <span className="text-sm">{t("backToStep")}</span>
        </button>

        <h2 className="text-white text-2xl font-bold" data-aos="zoom-in">
          {t("secondStepUploadForm")}
        </h2>

        <div className="flex flex-col gap-8">
          {/* Selector de tipo */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 w-full">
            <div className="flex flex-col w-full max-w-xs">
              <label className="text-xs text-gray-300 mb-1 font-medium">
                Tipo
              </label>
              <select
                value={typeForm || "player"}
                onChange={(e) => handleTypeSelect(e.target.value)}
                className="px-3 py-2 rounded-md bg-gray-700 text-white text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              >
                <option value="player">Player</option>
                <option value="club">Club</option>
              </select>
            </div>
          </div>
          {/* Imagen del jugador */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold">Imagen</h3>
            <ImageUpload onProcessed={handleProcessedImage} />
          </div>

          {/* Formulario Player */}
          {isPlayer && (
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-semibold">
                Completa los datos del jugador
              </h3>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {playerFields.map((f) => {
                  const isDerived = f.derived;
                  return (
                    <div key={f.key} className="flex flex-col gap-1 relative">
                      <label className="text-xs text-gray-300 font-medium flex items-center gap-2">
                        <span>
                          {f.label}
                          {!isDerived && f.key !== "escuelaClub" && (
                            <span className="text-red-400 ml-1">*</span>
                          )}
                        </span>
                        {isDerived && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-600/40 text-indigo-200 border border-indigo-500/40 uppercase tracking-wide">
                            Auto
                          </span>
                        )}
                      </label>
                      {(() => {
                        // campos que deben ser select A-D
                        const adFields = [
                          "sentadillaProfunda",
                          "coordinacion",
                          // dorsiflexiones también A-D
                          "dorsiflexionTobilloIzq",
                          "dorsiflexionTobilloDer",
                        ];
                        if (f.key === "biotipo") {
                          return (
                            <select
                              value={formData[f.key]}
                              onChange={(e) =>
                                !isDerived &&
                                handleChangeField(f.key, e.target.value)
                              }
                              disabled={isDerived}
                              className={`px-2 py-2 rounded-md bg-gray-700 text-white text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-400 ${
                                errors[f.key]
                                  ? "border-red-500"
                                  : "border-gray-600"
                              } ${
                                isDerived ? "opacity-80 cursor-not-allowed" : ""
                              }`}
                            >
                              <option value="">Seleccionar biotipo</option>
                              <option value="Ectomorfo">Ectomorfo</option>
                              <option value="Mesomorfo">Mesomorfo</option>
                              <option value="Endomorfo">Endomorfo</option>
                            </select>
                          );
                        }
                        if (f.key === "sexo") {
                          return (
                            <select
                              value={formData[f.key] || ""}
                              onChange={(e) =>
                                !isDerived &&
                                handleChangeField(f.key, e.target.value)
                              }
                              disabled={isDerived}
                              className={`px-2 py-2 rounded-md bg-gray-700 text-white text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-400 ${
                                errors[f.key]
                                  ? "border-red-500"
                                  : "border-gray-600"
                              } ${
                                isDerived ? "opacity-80 cursor-not-allowed" : ""
                              }`}
                            >
                              <option value="">-</option>
                              <option value="M">M</option>
                              <option value="F">F</option>
                            </select>
                          );
                        }
                        if (f.key === "lateralidad") {
                          return (
                            <select
                              value={formData[f.key] || ""}
                              onChange={(e) =>
                                !isDerived &&
                                handleChangeField(f.key, e.target.value)
                              }
                              disabled={isDerived}
                              className={`px-2 py-2 rounded-md bg-gray-700 text-white text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-400 ${
                                errors[f.key]
                                  ? "border-red-500"
                                  : "border-gray-600"
                              } ${
                                isDerived ? "opacity-80 cursor-not-allowed" : ""
                              }`}
                            >
                              <option value="">-</option>
                              <option value="Cruzado">Cruzado</option>
                              <option value="Homogenio">Homogenio</option>
                            </select>
                          );
                        }
                        // Campos de lateralidad específicos como select Izq/Der
                        if (
                          [
                            "ojoDirector",
                            "hombro",
                            "brazoDirector",
                            "cintura",
                            "piernaDominante",
                            "piernaDirectora",
                          ].includes(f.key)
                        ) {
                          return (
                            <select
                              value={formData[f.key] || ""}
                              onChange={(e) =>
                                !isDerived &&
                                handleChangeField(f.key, e.target.value)
                              }
                              disabled={isDerived}
                              className={`px-2 py-2 rounded-md bg-gray-700 text-white text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-400 ${
                                errors[f.key]
                                  ? "border-red-500"
                                  : "border-gray-600"
                              } ${
                                isDerived ? "opacity-80 cursor-not-allowed" : ""
                              }`}
                            >
                              <option value="">-</option>
                              <option value="Izq">Izq</option>
                              <option value="Der">Der</option>
                            </select>
                          );
                        }
                        if (adFields.includes(f.key)) {
                          return (
                            <select
                              value={formData[f.key] || ""}
                              onChange={(e) =>
                                !isDerived &&
                                handleChangeField(f.key, e.target.value)
                              }
                              disabled={isDerived}
                              className={`px-2 py-2 rounded-md bg-gray-700 text-white text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-400 ${
                                errors[f.key]
                                  ? "border-red-500"
                                  : "border-gray-600"
                              } ${
                                isDerived ? "opacity-80 cursor-not-allowed" : ""
                              }`}
                            >
                              <option value="">-</option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                            </select>
                          );
                        }

                        // Mostrar clasificación y rango para Capacidad Pulmonar Total
                        if (f.key === "capacidadPulmonarTotal") {
                          const sexo = String(
                            formData.sexo || ""
                          ).toUpperCase();
                          const mapping: Record<
                            string,
                            { M: string; F: string }
                          > = {
                            A: { M: "≥90 seg", F: "≥70 seg" },
                            B: { M: "70-89 seg", F: "55-69 seg" },
                            C: { M: "45-69 seg", F: "35-54 seg" },
                            D: { M: "<45 seg", F: "<35 seg" },
                          };
                          const labelFor = (grade: string) => {
                            const g = mapping[grade];
                            if (sexo === "M") {
                              return `${grade} - ${g.M}`;
                            } else if (sexo === "F") {
                              return `${grade} - ${g.F}`;
                            }
                            // cuando sexo no seleccionado, mostrar solo la letra
                            return grade;
                          };

                          return (
                            <>
                              <select
                                value={formData[f.key] || ""}
                                onChange={(e) =>
                                  !isDerived &&
                                  handleChangeField(f.key, e.target.value)
                                }
                                disabled={isDerived || !sexo}
                                className={`px-2 py-2 rounded-md bg-gray-700 text-white text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-400 ${
                                  errors[f.key]
                                    ? "border-red-500"
                                    : "border-gray-600"
                                } ${
                                  isDerived || !sexo
                                    ? "opacity-80 cursor-not-allowed"
                                    : ""
                                }`}
                              >
                                <option value="">
                                  {!sexo ? "Seleccione sexo primero" : "-"}
                                </option>
                                <option value="A">{`${labelFor("A")}`}</option>
                                <option value="B">{`${labelFor("B")}`}</option>
                                <option value="C">{`${labelFor("C")}`}</option>
                                <option value="D">{`${labelFor("D")}`}</option>
                              </select>
                              {formData.capacidadPulmonarTotal && (
                                <div className="mt-1 flex flex-col gap-1 text-[10px] leading-tight">
                                  {capacidadCategoria && (
                                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-600/30 text-emerald-200 border border-emerald-500/40">
                                      {capacidadCategoria}
                                    </span>
                                  )}
                                  {capacidadValorRango && (
                                    <span className="inline-block px-2 py-0.5 rounded bg-slate-600/40 text-slate-200 border border-slate-500/40">
                                      Valor: {capacidadValorRango}
                                    </span>
                                  )}
                                </div>
                              )}
                            </>
                          );
                        }
                        // Mostrar clasificación y rango para Capacidad Pulmunar Residual
                        if (f.key === "capacidadPulmunarResidual") {
                          const sexo = String(
                            formData.sexo || ""
                          ).toUpperCase();
                          const mapping: Record<
                            string,
                            { M: string; F: string }
                          > = {
                            A: { M: "≥35 seg", F: "≥30 seg" },
                            B: { M: "25-34 seg", F: "20-29 seg" },
                            C: { M: "15-24 seg", F: "10-19 seg" },
                            D: { M: "<15 seg", F: "<10 seg" },
                          };
                          const labelFor = (grade: string) => {
                            const g = mapping[grade];
                            if (sexo === "M") {
                              return `${grade} - ${g.M}`;
                            } else if (sexo === "F") {
                              return `${grade} - ${g.F}`;
                            }
                            // cuando sexo no seleccionado, mostrar solo la letra
                            return grade;
                          };

                          return (
                            <>
                              <select
                                value={formData[f.key] || ""}
                                onChange={(e) =>
                                  !isDerived &&
                                  handleChangeField(f.key, e.target.value)
                                }
                                disabled={isDerived || !sexo}
                                className={`px-2 py-2 rounded-md bg-gray-700 text-white text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-400 ${
                                  errors[f.key]
                                    ? "border-red-500"
                                    : "border-gray-600"
                                } ${
                                  isDerived || !sexo
                                    ? "opacity-80 cursor-not-allowed"
                                    : ""
                                }`}
                              >
                                <option value="">
                                  {!sexo ? "Seleccione sexo primero" : "-"}
                                </option>
                                <option value="A">{`${labelFor("A")}`}</option>
                                <option value="B">{`${labelFor("B")}`}</option>
                                <option value="C">{`${labelFor("C")}`}</option>
                                <option value="D">{`${labelFor("D")}`}</option>
                              </select>
                              {formData.capacidadPulmunarResidual && (
                                <div className="mt-1 flex flex-col gap-1 text-[10px] leading-tight">
                                  {capResidualCategoria && (
                                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-600/30 text-emerald-200 border border-emerald-500/40">
                                      {capResidualCategoria}
                                    </span>
                                  )}
                                  {capResidualValorRango && (
                                    <span className="inline-block px-2 py-0.5 rounded bg-slate-600/40 text-slate-200 border border-slate-500/40">
                                      Valor: {capResidualValorRango}
                                    </span>
                                  )}
                                </div>
                              )}
                            </>
                          );
                        }
                        return (
                          <input
                            type={f.type || "text"}
                            value={formData[f.key]}
                            onChange={(e) =>
                              !isDerived &&
                              handleChangeField(f.key, e.target.value)
                            }
                            readOnly={isDerived}
                            className={`px-2 py-2 rounded-md bg-gray-700 text-white text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/60 placeholder-gray-400 ${
                              errors[f.key]
                                ? "border-red-500"
                                : "border-gray-600"
                            } ${
                              isDerived ? "opacity-80 cursor-not-allowed" : ""
                            }`}
                            placeholder={f.placeholder || f.label}
                          />
                        );
                      })()}
                      {errors[f.key] && (
                        <span className="text-red-400 text-xs">
                          {errors[f.key]}
                        </span>
                      )}
                      {f.key === "indiceQ" && formData.indiceQ !== "" && (
                        <div className="mt-1 flex flex-col gap-1 text-[10px] leading-tight">
                          {indiceQCategoria && (
                            <span className="inline-block px-2 py-0.5 rounded bg-emerald-600/30 text-emerald-200 border border-emerald-500/40">
                              {indiceQCategoria}
                            </span>
                          )}
                          {indiceQValorRango && (
                            <span className="inline-block px-2 py-0.5 rounded bg-slate-600/40 text-slate-200 border border-slate-500/40">
                              Valor: {indiceQValorRango} Spartans Coins
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* Formulario Club placeholder */}
          {isClub && (
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-semibold">Datos del club</h3>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {clubFields.map((f) => (
                  <div key={f.key} className="flex flex-col gap-1">
                    <label className="text-xs text-gray-300 font-medium">
                      {f.label}
                      {!f.optional && (
                        <span className="text-red-400 ml-1">*</span>
                      )}
                    </label>
                    <input
                      type="text"
                      value={formData[f.key] || ""}
                      onChange={(e) => handleChangeField(f.key, e.target.value)}
                      className={`px-2 py-2 rounded-md bg-gray-700 text-white text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/60 border-gray-600 placeholder-gray-400`}
                      placeholder={f.label}
                    />
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-md bg-blue-600/10 border border-blue-600/30 text-xs text-blue-300">
                Validaciones específicas de club se implementarán más adelante.
              </div>
            </div>
          )}
        </div>

        {/* Acciones */}
        <div className="mt-6 flex flex-wrap gap-3">
          {isPlayer && (
            <button
              onClick={handleSave}
              disabled={isLoading}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
            >
              {isLoading && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              )}
              {isLoading ? "Guardando..." : "Guardar jugador"}
            </button>
          )}
          {isClub && (
            <button
              onClick={() => toast.success("Club guardado (placeholder)")}
              disabled={isLoading}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
            >
              Guardar club
            </button>
          )}
          <button
            onClick={() => {
              resetFormForType(typeForm || "player");
            }}
            disabled={isLoading}
            type="button"
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-600 hover:bg-gray-700"
            } text-white`}
          >
            Limpiar
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondStep;
