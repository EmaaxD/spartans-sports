import * as XLSX from "xlsx";
import { cleanString, isValidEmail, parseNumber } from "./validations";

// Extrae todos los datos crudos de la primera hoja del archivo Excel
export const extractRawExcelData = async (file: File): Promise<any[][]> => {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    raw: false,
    defval: "",
  }) as any[][];
  return jsonData;
};

// Interfaces para los datos procesados
export interface ProcessedPlayerData {
  nombre: string;
  apellido: string;
  edad: number;
  peso: number;
  altura: number;
  alturaTorso: number;
  envergaduraBrazos: number;
  alturaDeVuelo: number;
  tiempoDeContacto: number;
  imc: number;
  tmb: number;
  biotipo: string;
  lateralidad: string;
  ojoDirector: string;
  hombro: string;
  brazoDirector: string;
  cintura: string;
  piernaDominante: string;
  piernaDirectora: string;
  dorsiflexionTobilloIzq: string;
  dorsiflexionTobilloDer: string;
  manoDer: string;
  manoIzq: string;
  indiceQ: string;
  provincia: string;
  sentadillaProfunda: string;
  capacidadPulmonarTotal: string;
  coordinacion: string;
  capacidadPulmunarResidual: string;
  posicion: string;
  sexo: string;
  clase: string;
  fechaNacimiento: string;
  localidad: string;
  escuelaClub: string;
  contacto: string;
  deporte: string;
  rowNumber?: number; // Para tracking de errores
}

export interface ProcessedClubData {
  nombreClub: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  email: string;
  presidente: string;
  fechaFundacion: string;
  rowNumber?: number;
}

export interface ProcessedDanceAcademyData {
  nombreAcademia: string;
  director: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  email: string;
  tiposDanza: string;
  rowNumber?: number;
}

export interface ProcessingResult<T> {
  data: T[];
  errors: ProcessingError[];
  totalRows: number;
  validRows: number;
}

export interface ProcessingError {
  row: number;
  field: string;
  value: any;
  message: string;
}

// Función principal para procesar archivos
export const processExcelFile = async (
  file: File,
  templateType: "player" | "club" | "danceAcademy" | string
): Promise<ProcessingResult<any>> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    // Obtener la primera hoja
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Convertir a JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1, // Para obtener arrays en lugar de objetos
      raw: false, // Para convertir fechas y números a string
      defval: "", // Valor por defecto para celdas vacías
    }) as any[][];

    if (jsonData.length < 2) {
      throw new Error(
        "El archivo debe contener al menos una fila de encabezados y una fila de datos"
      );
    }

    // Normalizar templateType (tolerar mayúsculas, espacios, traducciones simples)
  const rawType = String(templateType ?? "").trim().toLowerCase();
    let normalizedType: "player" | "club" | "danceAcademy" | null = null;
    if (rawType === "player") normalizedType = "player";
    else if (rawType === "club") normalizedType = "club";
    else if (rawType === "danceacademy" || rawType === "dance_academy")
      normalizedType = "danceAcademy";

    // Procesar según el tipo de plantilla
    switch (normalizedType) {
      case "player":
        return processPlayerData(jsonData);
      case "club":
        return processClubData(jsonData);
      case "danceAcademy":
        return processDanceAcademyData(jsonData);
      default:
        throw new Error(
          `Tipo de plantilla no válido (recibido: "${templateType}"). Valores permitidos: player | club | danceAcademy`
        );
    }
  } catch (error) {
    console.error("Error processing file:", error);
    throw new Error(
      `Error al procesar el archivo: ${
        error instanceof Error ? error.message : "Error desconocido"
      }`
    );
  }
};

// Procesar datos de jugadores
const processPlayerData = (
  jsonData: any[][]
): ProcessingResult<ProcessedPlayerData> => {
  const headers = jsonData[0] as string[];
  const dataRows = jsonData.slice(1);

  const expectedHeaders = [
    "nombre",
    "apellido",
    "edad",
    "peso",
    "altura",
    // Reordenado: sexo, clase y fechaNacimiento inmediatamente después de altura
    "sexo",
    "clase",
    "fechaNacimiento",
  "alturaTorso",
    "envergaduraBrazos",
    "alturaDeVuelo(m)",
    "tiempoDeContacto(s)",
    "imc",
    "tmb",
    "indiceQ",
    "biotipo",
    "lateralidad",
    "ojoDirector",
    "hombro",
    "brazoDirector",
    "cintura",
    "piernaDominante",
    "piernaDirectora",
    "dorsiflexionTobilloIzq",
    "dorsiflexionTobilloDer",
  "posicion",
  "localidad",
  "provincia",
    "escuelaClub",
    "contacto",
    "deporte",
    "manoDer",
    "manoIzq",
    "sentadillaProfunda",
    "capacidadPulmonarTotal",
    "coordinacion",
    "capacidadPulmunarResidual",
  ];

  // Validar headers
  const headerErrors: ProcessingError[] = [];
  expectedHeaders.forEach((expectedHeader, index) => {
    if (headers[index]?.toLowerCase() !== expectedHeader.toLowerCase()) {
      headerErrors.push({
        row: 1,
        field: `columna_${index + 1}`,
        value: headers[index],
        message: `Se esperaba "${expectedHeader}" pero se encontró "${
          headers[index] || "vacío"
        }"`,
      });
    }
  });

  if (headerErrors.length > 0) {
    return {
      data: [],
      errors: headerErrors,
      totalRows: dataRows.length,
      validRows: 0,
    };
  }

  const processedData: ProcessedPlayerData[] = [];
  const errors: ProcessingError[] = [];

  dataRows.forEach((row, index) => {
    const rowNumber = index + 2; // +2 porque empezamos desde la fila 2 (después de headers)

    // Verificar si la fila está completamente vacía
  if (row.every((cell) => !cell || String(cell ?? "").trim() === "")) {
      return; // Saltar filas vacías
    }

  // Mapeo correcto según headers de la planilla (reordenados):
  // 0 nombre,1 apellido,2 edad,3 peso,4 altura,5 sexo,6 clase,7 fechaNacimiento,
  // 8 alturaTorso,9 envergaduraBrazos,10 alturaDeVuelo(m),11 tiempoDeContacto(s),12 imc,13 tmb,14 indiceQ,15 biotipo,
  // 16 lateralidad,17 ojoDirector,18 hombro,19 brazoDirector,20 cintura,21 piernaDominante,22 piernaDirectora,
  // 23 dorsiflexionTobilloIzq,24 dorsiflexionTobilloDer,25 posicion,26 localidad,27 provincia,28 escuelaClub,29 contacto,
  // 30 deporte,31 manoDer,32 manoIzq,33 sentadillaProfunda,
  // 34 capacidadPulmonarTotal,35 coordinacion,36 capacidadPulmunarResidual
    const playerData: ProcessedPlayerData = {
      nombre: cleanString(row[0]),
      apellido: cleanString(row[1]),
      edad: parseNumber(row[2]) || 0,
      peso: parseNumber(row[3]) || 0,
      altura: parseNumber(row[4]) || 0,
      sexo: cleanString(row[5]),
      clase: cleanString(row[6]),
      fechaNacimiento: cleanString(row[7]),
    alturaTorso: parseNumber(row[8]) || 0,
    envergaduraBrazos: parseNumber(row[9]) || 0,
    alturaDeVuelo: parseNumber(row[10]) || 0,
    tiempoDeContacto: parseNumber(row[11]) || 0,
    imc: parseNumber(row[12]) || 0,
    tmb: parseNumber(row[13]) || 0,
    indiceQ: cleanString(row[14]),
    biotipo: cleanString(row[15]),
    lateralidad: cleanString(row[16]),
    ojoDirector: cleanString(row[17]),
    hombro: cleanString(row[18]),
    brazoDirector: cleanString(row[19]),
    cintura: cleanString(row[20]),
    piernaDominante: cleanString(row[21]),
    piernaDirectora: cleanString(row[22]),
    dorsiflexionTobilloIzq: cleanString(row[23]),
    dorsiflexionTobilloDer: cleanString(row[24]),
  posicion: cleanString(row[25]),
  localidad: cleanString(row[26]),
  provincia: cleanString(row[27]),
  escuelaClub: cleanString(row[28]),
  contacto: cleanString(row[29]),
  deporte: cleanString(row[30]),
  manoDer: cleanString(row[31]),
  manoIzq: cleanString(row[32]),
  sentadillaProfunda: cleanString(row[33]),
  capacidadPulmonarTotal: cleanString(row[34]),
  coordinacion: cleanString(row[35]),
  capacidadPulmunarResidual: cleanString(row[36]),
      rowNumber,
    };

    // Validaciones
    const rowErrors = validatePlayerData(playerData, rowNumber);
    if (rowErrors.length > 0) {
      errors.push(...rowErrors);
    } else {
      processedData.push(playerData);
    }
  });

  return {
    data: processedData,
    errors,
    totalRows: dataRows.length,
    validRows: processedData.length,
  };
};

// Procesar datos de clubes
const processClubData = (
  jsonData: any[][]
): ProcessingResult<ProcessedClubData> => {
  const headers = jsonData[0] as string[];
  const dataRows = jsonData.slice(1);

  const expectedHeaders = [
    "nombreClub",
    "ciudad",
    "direccion",
    "telefono",
    "email",
    "presidente",
    "fechaFundacion",
  ];

  const processedData: ProcessedClubData[] = [];
  const errors: ProcessingError[] = [];

  dataRows.forEach((row, index) => {
    const rowNumber = index + 2;

  if (row.every((cell) => !cell || String(cell ?? "").trim() === "")) {
      return;
    }

    const clubData: ProcessedClubData = {
      nombreClub: cleanString(row[0]),
      ciudad: cleanString(row[1]),
      direccion: cleanString(row[2]),
      telefono: cleanString(row[3]),
      email: cleanString(row[4]),
      presidente: cleanString(row[5]),
      fechaFundacion: cleanString(row[6]),
      rowNumber,
    };

    const rowErrors = validateClubData(clubData, rowNumber);
    if (rowErrors.length > 0) {
      errors.push(...rowErrors);
    } else {
      processedData.push(clubData);
    }
  });

  return {
    data: processedData,
    errors,
    totalRows: dataRows.length,
    validRows: processedData.length,
  };
};

// Procesar datos de academias de danza
const processDanceAcademyData = (
  jsonData: any[][]
): ProcessingResult<ProcessedDanceAcademyData> => {
  const headers = jsonData[0] as string[];
  const dataRows = jsonData.slice(1);

  const processedData: ProcessedDanceAcademyData[] = [];
  const errors: ProcessingError[] = [];

  dataRows.forEach((row, index) => {
    const rowNumber = index + 2;

  if (row.every((cell) => !cell || String(cell ?? "").trim() === "")) {
      return;
    }

    const academyData: ProcessedDanceAcademyData = {
      nombreAcademia: cleanString(row[0]),
      director: cleanString(row[1]),
      ciudad: cleanString(row[2]),
      direccion: cleanString(row[3]),
      telefono: cleanString(row[4]),
      email: cleanString(row[5]),
      tiposDanza: cleanString(row[6]),
      rowNumber,
    };

    const rowErrors = validateDanceAcademyData(academyData, rowNumber);
    if (rowErrors.length > 0) {
      errors.push(...rowErrors);
    } else {
      processedData.push(academyData);
    }
  });

  return {
    data: processedData,
    errors,
    totalRows: dataRows.length,
    validRows: processedData.length,
  };
};

// Funciones de validación
const validatePlayerData = (
  data: ProcessedPlayerData,
  rowNumber: number
): ProcessingError[] => {
  const errors: ProcessingError[] = [];

  if (!data.nombre.trim()) {
    errors.push({
      row: rowNumber,
      field: "nombre",
      value: data.nombre,
      message: "El nombre es requerido",
    });
  }

  if (!data.apellido.trim()) {
    errors.push({
      row: rowNumber,
      field: "apellido",
      value: data.apellido,
      message: "El apellido es requerido",
    });
  }

  if (data.edad <= 0 || data.edad > 100) {
    errors.push({
      row: rowNumber,
      field: "edad",
      value: data.edad,
      message: "La edad debe ser entre 1 y 100 años",
    });
  }

  // Validar peso
  if (data.peso <= 0 || data.peso > 300) {
    errors.push({
      row: rowNumber,
      field: "peso",
      value: data.peso,
      message: "El peso debe ser entre 1 y 300 kg",
    });
  }

  // Validar altura
  if (data.altura <= 50 || data.altura > 250) {
    errors.push({
      row: rowNumber,
      field: "altura",
      value: data.altura,
      message: "La altura debe ser entre 50 y 250 cm",
    });
  }

  // Validar altura torso
  if (data.alturaTorso <= 0 || data.alturaTorso > 150) {
    errors.push({
      row: rowNumber,
      field: "alturaTorso",
      value: data.alturaTorso,
      message: "La altura del torso debe ser entre 1 y 150 cm",
    });
  }

  // Validar envergadura de brazos
  if (data.envergaduraBrazos <= 0 || data.envergaduraBrazos > 300) {
    errors.push({
      row: rowNumber,
      field: "envergaduraBrazos",
      value: data.envergaduraBrazos,
      message: "La envergadura de brazos debe ser entre 1 y 300 cm",
    });
  }

  // Validar IMC
  if (data.imc <= 10 || data.imc > 50) {
    errors.push({
      row: rowNumber,
      field: "imc",
      value: data.imc,
      message: "El IMC debe ser entre 10 y 50",
    });
  }

  // Validar TMB (Tasa Metabólica Basal)
  if (data.tmb <= 500 || data.tmb > 4000) {
    errors.push({
      row: rowNumber,
      field: "tmb",
      value: data.tmb,
      message: "La TMB debe ser entre 500 y 4000 calorías",
    });
  }

  // Validar biotipo
  if (!data.biotipo.trim()) {
    errors.push({
      row: rowNumber,
      field: "biotipo",
      value: data.biotipo,
      message: "El biotipo es requerido",
    });
  } else if (
    ![
      "Ectomorfo",
      "Mesomorfo",
      "Endomorfo",
      "ectomorfo",
      "mesomorfo",
      "endomorfo",
    ].includes(data.biotipo)
  ) {
    errors.push({
      row: rowNumber,
      field: "biotipo",
      value: data.biotipo,
      message: "El biotipo debe ser: Ectomorfo, Mesomorfo o Endomorfo",
    });
  }

  // Validar lateralidad (cruzado / homogenio)
  if (!data.lateralidad.trim()) {
    errors.push({
      row: rowNumber,
      field: "lateralidad",
      value: data.lateralidad,
      message: "La lateralidad es requerida (cruzado u homogenio)",
    });
  } else if (
    !["cruzado", "homogenio", "Cruzado", "Homogenio"].includes(data.lateralidad)
  ) {
    errors.push({
      row: rowNumber,
      field: "lateralidad",
      value: data.lateralidad,
      message: "La lateralidad debe ser 'cruzado' u 'homogenio'",
    });
  }

  // Validaciones A-D (permiten vacío): dorsiflexiones, sentadilla, capacidad pulmonar total, coordinación, capacidad residual
  const ADFields: Array<{ key: keyof ProcessedPlayerData; label: string }> = [
    { key: "dorsiflexionTobilloIzq", label: "dorsiflexionTobilloIzq" },
    { key: "dorsiflexionTobilloDer", label: "dorsiflexionTobilloDer" },
    { key: "sentadillaProfunda", label: "sentadillaProfunda" },
    { key: "capacidadPulmonarTotal", label: "capacidadPulmonarTotal" },
    { key: "coordinacion", label: "coordinacion" },
    { key: "capacidadPulmunarResidual", label: "capacidadPulmunarResidual" },
  ];
  const ADAllowed = ["A", "B", "C", "D", "a", "b", "c", "d", ""]; // vacío permitido
  ADFields.forEach((f) => {
    const val = ((data[f.key] as unknown as string) || "").trim();
    if (val && !ADAllowed.includes(val)) {
      errors.push({
        row: rowNumber,
        field: f.label,
        value: val,
        message: "El valor debe ser A, B, C o D",
      });
    }
  });

  // Validaciones manoDer / manoIzq / indiceQ (opcionales): no reglas estrictas excepto longitud razonable
  const optionalFreeText: Array<{
    key: keyof ProcessedPlayerData;
    label: string;
  }> = [
    { key: "manoDer", label: "manoDer" },
    { key: "manoIzq", label: "manoIzq" },
    { key: "indiceQ", label: "indiceQ" },
  ];
  optionalFreeText.forEach((f) => {
    const v = ((data[f.key] as unknown as string) || "").trim();
    if (v && v.length > 30) {
      errors.push({
        row: rowNumber,
        field: f.label,
        value: v,
        message: "El texto no debe superar 30 caracteres",
      });
    }
  });

  // Validar ojo director
  if (!data.ojoDirector.trim()) {
    errors.push({
      row: rowNumber,
      field: "ojoDirector",
      value: data.ojoDirector,
      message: "El ojo director es requerido",
    });
  } else if (
    !["Izq.", "Der.", "izq.", "der.", "Izq", "Der", "izq", "der"].includes(
      data.ojoDirector
    )
  ) {
    errors.push({
      row: rowNumber,
      field: "ojoDirector",
      value: data.ojoDirector,
      message: "El ojo director debe ser: Izq. o Der.",
    });
  }

  // Validar hombro
  if (!data.hombro.trim()) {
    errors.push({
      row: rowNumber,
      field: "hombro",
      value: data.hombro,
      message: "El hombro es requerido",
    });
  } else if (
    !["Izq.", "Der.", "izq.", "der.", "Izq", "Der", "izq", "der"].includes(
      data.hombro
    )
  ) {
    errors.push({
      row: rowNumber,
      field: "hombro",
      value: data.hombro,
      message: "El hombro debe ser: Izq. o Der.",
    });
  }

  // Validar brazo director
  if (!data.brazoDirector.trim()) {
    errors.push({
      row: rowNumber,
      field: "brazoDirector",
      value: data.brazoDirector,
      message: "El brazo director es requerido",
    });
  } else if (
    !["Izq.", "Der.", "izq.", "der.", "Izq", "Der", "izq", "der"].includes(
      data.brazoDirector
    )
  ) {
    errors.push({
      row: rowNumber,
      field: "brazoDirector",
      value: data.brazoDirector,
      message: "El brazo director debe ser: Izq. o Der.",
    });
  }

  // Validar cintura
  if (!data.cintura.trim()) {
    errors.push({
      row: rowNumber,
      field: "cintura",
      value: data.cintura,
      message: "La cintura es requerida",
    });
  } else if (
    !["Izq.", "Der.", "izq.", "der.", "Izq", "Der", "izq", "der"].includes(
      data.cintura
    )
  ) {
    errors.push({
      row: rowNumber,
      field: "cintura",
      value: data.cintura,
      message: "La cintura debe ser: Izq. o Der.",
    });
  }

  // Validar pierna dominante
  if (!data.piernaDominante.trim()) {
    errors.push({
      row: rowNumber,
      field: "piernaDominante",
      value: data.piernaDominante,
      message: "La pierna dominante es requerida",
    });
  } else if (
    !["Izq.", "Der.", "izq.", "der.", "Izq", "Der", "izq", "der"].includes(
      data.piernaDominante
    )
  ) {
    errors.push({
      row: rowNumber,
      field: "piernaDominante",
      value: data.piernaDominante,
      message: "La pierna dominante debe ser: Izq. o Der.",
    });
  }

  // Validar pierna directora
  if (!data.piernaDirectora.trim()) {
    errors.push({
      row: rowNumber,
      field: "piernaDirectora",
      value: data.piernaDirectora,
      message: "La pierna directora es requerida",
    });
  } else if (
    !["Izq.", "Der.", "izq.", "der.", "Izq", "Der", "izq", "der"].includes(
      data.piernaDirectora
    )
  ) {
    errors.push({
      row: rowNumber,
      field: "piernaDirectora",
      value: data.piernaDirectora,
      message: "La pierna directora debe ser: Izq. o Der.",
    });
  }

  // Validar posición (solo requerido, sin mínimo de caracteres)
  if (!data.posicion.trim()) {
    errors.push({
      row: rowNumber,
      field: "posicion",
      value: data.posicion,
      message: "La posición es requerida",
    });
  }

  if (data.sexo && !["M", "F", "m", "f"].includes(data.sexo)) {
    errors.push({
      row: rowNumber,
      field: "sexo",
      value: data.sexo,
      message: "El sexo debe ser M o F",
    });
  }

  // Validar clase
  if (!data.clase.trim()) {
    errors.push({
      row: rowNumber,
      field: "clase",
      value: data.clase,
      message: "La clase es requerida",
    });
  } else if (!/^\d{4}$/.test(data.clase)) {
    errors.push({
      row: rowNumber,
      field: "clase",
      value: data.clase,
      message: "La clase debe ser un año de 4 dígitos (ej: 2005)",
    });
  } else {
    const year = parseInt(data.clase);
    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
      errors.push({
        row: rowNumber,
        field: "clase",
        value: data.clase,
        message: `La clase debe ser un año entre 1900 y ${currentYear}`,
      });
    }
  }

  // Validar fecha de nacimiento
  if (!data.fechaNacimiento.trim()) {
    errors.push({
      row: rowNumber,
      field: "fechaNacimiento",
      value: data.fechaNacimiento,
      message: "La fecha de nacimiento es requerida",
    });
  } else if (!isValidDate(data.fechaNacimiento)) {
    errors.push({
      row: rowNumber,
      field: "fechaNacimiento",
      value: data.fechaNacimiento,
      message: "La fecha debe tener formato DD/MM/YYYY (ej: 15/03/2005)",
    });
  } else {
    // Validar coherencia entre fecha de nacimiento y edad
    const calculatedAge = calculateAge(data.fechaNacimiento);
    if (Math.abs(calculatedAge - data.edad) > 1) {
      errors.push({
        row: rowNumber,
        field: "fechaNacimiento",
        value: data.fechaNacimiento,
        message: `La edad (${data.edad}) no coincide con la fecha de nacimiento (edad calculada: ${calculatedAge})`,
      });
    }
  }

  // Validar localidad
  if (!data.localidad.trim()) {
    errors.push({
      row: rowNumber,
      field: "localidad",
      value: data.localidad,
      message: "La localidad es requerida",
    });
  } else if (data.localidad.length < 2) {
    errors.push({
      row: rowNumber,
      field: "localidad",
      value: data.localidad,
      message: "La localidad debe tener al menos 2 caracteres",
    });
  }

  // Validar escuela/club
  if (!data.escuelaClub.trim()) {
    errors.push({
      row: rowNumber,
      field: "escuelaClub",
      value: data.escuelaClub,
      message: "La escuela o club es requerido",
    });
  } else if (data.escuelaClub.length < 3) {
    errors.push({
      row: rowNumber,
      field: "escuelaClub",
      value: data.escuelaClub,
      message:
        "El nombre de la escuela o club debe tener al menos 3 caracteres",
    });
  }

  // Validar deporte
  if (!data.deporte.trim()) {
    errors.push({
      row: rowNumber,
      field: "deporte",
      value: data.deporte,
      message: "El deporte es requerido",
    });
  } else if (data.deporte.length < 3) {
    errors.push({
      row: rowNumber,
      field: "deporte",
      value: data.deporte,
      message: "El deporte debe tener al menos 3 caracteres",
    });
  }

  if (data.contacto && data.contacto.trim()) {
    // El contacto puede ser teléfono, email, o ambos separados por " / "
    const contactParts = data.contacto.split("/").map((part) => part.trim());

    let hasValidContact = false;

    for (const part of contactParts) {
      if (part.includes("@")) {
        // Es un email
        if (isValidEmail(part)) {
          hasValidContact = true;
        }
      } else {
        // Es un teléfono
        if (isValidPhoneNumber(part)) {
          hasValidContact = true;
        }
      }
    }

    if (!hasValidContact) {
      errors.push({
        row: rowNumber,
        field: "contacto",
        value: data.contacto,
        message:
          "El contacto debe ser un email válido, un teléfono válido, o ambos separados por ' / '. Ej: juan@email.com / +54 11 1234-5678",
      });
    }
  }

  return errors;
};

const validateClubData = (
  data: ProcessedClubData,
  rowNumber: number
): ProcessingError[] => {
  const errors: ProcessingError[] = [];

  if (!data.nombreClub.trim()) {
    errors.push({
      row: rowNumber,
      field: "nombreClub",
      value: data.nombreClub,
      message: "El nombre del club es requerido",
    });
  }

  if (data.email && !isValidEmail(data.email)) {
    errors.push({
      row: rowNumber,
      field: "email",
      value: data.email,
      message: "El email no tiene un formato válido",
    });
  }

  return errors;
};

const validateDanceAcademyData = (
  data: ProcessedDanceAcademyData,
  rowNumber: number
): ProcessingError[] => {
  const errors: ProcessingError[] = [];

  if (!data.nombreAcademia.trim()) {
    errors.push({
      row: rowNumber,
      field: "nombreAcademia",
      value: data.nombreAcademia,
      message: "El nombre de la academia es requerido",
    });
  }

  if (data.email && !isValidEmail(data.email)) {
    errors.push({
      row: rowNumber,
      field: "email",
      value: data.email,
      message: "El email no tiene un formato válido",
    });
  }

  return errors;
};

// Función para convertir CSV a XLSX si es necesario
export const processCSVFile = async (file: File): Promise<File> => {
  const text = await file.text();
  const lines = text.split("\n");
  const data = lines.map((line) => line.split(","));

  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  const xlsxBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
  return new File([xlsxBuffer], file.name.replace(".csv", ".xlsx"), {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
};

// Función para validar números de teléfono
const isValidPhoneNumber = (phone: string): boolean => {
  // Limpiar el número de espacios, guiones, paréntesis y otros caracteres
  const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, "");

  // Si empieza con 54 (código de Argentina), quitarlo para validar el resto
  const phoneWithoutCountry = cleanPhone.startsWith("54")
    ? cleanPhone.slice(2)
    : cleanPhone;

  // Patrones válidos para números argentinos
  const patterns = [
    /^\d{10}$/, // 10 dígitos (ej: 1123456789)
    /^\d{8}$/, // 8 dígitos (número local sin código de área)
    /^11\d{8}$/, // Buenos Aires (11 + 8 dígitos)
    /^2\d{9}$/, // Provincia Buenos Aires (2xx + 7-8 dígitos)
    /^3\d{9}$/, // Córdoba, Santa Fe, etc. (3xx + 7-8 dígitos)
    /^4\d{9}$/, // Salta, Tucumán, etc. (4xx + 7-8 dígitos)
    /^2\d{7}$/, // Algunos números locales (8 dígitos total)
    /^3\d{7}$/, // Algunos números locales (8 dígitos total)
    /^4\d{7}$/, // Algunos números locales (8 dígitos total)
  ];

  return patterns.some((pattern) => pattern.test(phoneWithoutCountry));
};

// Función para validar fechas en formato DD/MM/AAAA o DD/MM/AA
const isValidDate = (dateString: string): boolean => {
  // Acepta 2 o 4 dígitos de año
  const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/;
  const match = dateString.match(dateRegex);
  if (!match) return false;

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  let year = parseInt(match[3], 10);

  // Expandir año de 2 dígitos: si AA => se asume 2000-2099 salvo que sea mayor al año actual % 100, en cuyo caso 1900-1999
  if (match[3].length === 2) {
    const currentYear = new Date().getFullYear();
    const currentYY = currentYear % 100;
    year = year <= currentYY ? 2000 + year : 1900 + year;
  }

  const currentYearFull = new Date().getFullYear();
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;
  if (year < 1900 || year > currentYearFull) return false;

  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

// Función para calcular la edad a partir de una fecha DD/MM/AAAA o DD/MM/AA
const calculateAge = (birthDateString: string): number => {
  const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/;
  const match = birthDateString.match(dateRegex);
  if (!match) return 0;

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  let year = parseInt(match[3], 10);
  if (match[3].length === 2) {
    const currentYear = new Date().getFullYear();
    const currentYY = currentYear % 100;
    year = year <= currentYY ? 2000 + year : 1900 + year;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};
