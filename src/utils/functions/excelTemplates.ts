import * as XLSX from "xlsx";
// Nota: Para listas desplegables usaremos ExcelJS en la plantilla de jugadores
// porque la librería xlsx (SheetJS community) no escribe validaciones de datos de forma fiable.
// Se hace import dinámico para evitar problemas en SSR de Next.js.

// Interfaces para las plantillas
export interface PlayerTemplate {
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
  pieDer: string;
  pieIzq: string;
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
}

export interface ClubTemplate {
  nombreClub: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  email: string;
  presidente: string;
  fechaFundacion: string;
}

export interface DanceAcademyTemplate {
  nombreAcademia: string;
  director: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  email: string;
  tiposDanza: string;
}

// Función para generar plantilla de jugadores
export const generatePlayerTemplate = async (): Promise<Uint8Array> => {
  const ExcelJS = await import("exceljs");
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Jugadores");

  // Headers alineados con expectedHeaders en excelProcessor.ts
  const headers = [
    "nombre",
    "apellido",
    "edad",
    "peso",
    "altura",
    // Reordenado: agregar inmediatamente después de altura
    "sexo",
    "clase",
    "fechaNacimiento",
    "alturaTorso",
    "envergaduraBrazos",
    "alturaDeVuelo(m)",
    "tiempoDeContacto(s)",
    "imc",
    "tmb",
  // Mover índice Q antes de biotipo
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
    "escuelaClub",
    "contacto",
  "deporte",
  "manoDer",
  "manoIzq",
    "pieDer",
    "pieIzq",
    "sentadillaProfunda",
    "capacidadPulmonarTotal",
    "coordinacion",
    "capacidadPulmunarResidual",
  ];
  worksheet.addRow(headers);

  // 50 filas vacías
  for (let i = 0; i < 50; i++) worksheet.addRow([]);
  // Opciones para listas A-D utilizadas en varias columnas
  const dorsiflexionOptions = ["A", "B", "C", "D"];
  const dorsiflexionFormula = `"${dorsiflexionOptions.join(",")}"`;

  // Helper: convierte índice de columna (1-based) a letra(s) de columna de Excel (A, B, ..., AA, AB, ...)
  const indexToCol = (n: number) => {
    let s = "";
    while (n > 0) {
      const m = (n - 1) % 26;
      s = String.fromCharCode(65 + m) + s;
      n = Math.floor((n - 1) / 26);
    }
    return s;
  };

  // Lateralidad y segmentos (validaciones dinámicas)
  const segmentFields: Array<{
    key: keyof PlayerTemplate;
    formula: string;
    error: string;
    promptTitle: string;
    prompt: string;
  }> = [
    {
      key: "lateralidad",
      formula: '"cruzado,homogenio"',
      error: 'Seleccione "cruzado" u "homogenio"',
      promptTitle: "Lateralidad",
      prompt: "Elija cruzado u homogenio",
    },
    {
      key: "ojoDirector",
      formula: '"Izq,Der"',
      error: 'Seleccione "Izq" o "Der"',
      promptTitle: "Segmento",
      prompt: "Elija Izq o Der",
    },
    {
      key: "hombro",
      formula: '"Izq,Der"',
      error: 'Seleccione "Izq" o "Der"',
      promptTitle: "Segmento",
      prompt: "Elija Izq o Der",
    },
    {
      key: "brazoDirector",
      formula: '"Izq,Der"',
      error: 'Seleccione "Izq" o "Der"',
      promptTitle: "Segmento",
      prompt: "Elija Izq o Der",
    },
    {
      key: "cintura",
      formula: '"Izq,Der"',
      error: 'Seleccione "Izq" o "Der"',
      promptTitle: "Segmento",
      prompt: "Elija Izq o Der",
    },
    {
      key: "piernaDominante",
      formula: '"Izq,Der"',
      error: 'Seleccione "Izq" o "Der"',
      promptTitle: "Segmento",
      prompt: "Elija Izq o Der",
    },
    {
      key: "piernaDirectora",
      formula: '"Izq,Der"',
      error: 'Seleccione "Izq" o "Der"',
      promptTitle: "Segmento",
      prompt: "Elija Izq o Der",
    },
  ];
  segmentFields.forEach((f) => {
    const idx = headers.indexOf(f.key as string) + 1;
    if (idx > 0) {
      const col = indexToCol(idx);
      for (let row = 2; row <= 51; row++) {
        const cell = worksheet.getCell(`${col}${row}`);
        cell.dataValidation = {
          type: "list",
          allowBlank: false,
          formulae: [f.formula],
          showErrorMessage: true,
          errorTitle: "Valor inválido",
          error: f.error,
          showInputMessage: true,
          promptTitle: f.promptTitle,
          prompt: f.prompt,
        } as any;
      }
    }
  });

  // Dorsiflexión (A-D) - validaciones dinámicas
  ["dorsiflexionTobilloIzq", "dorsiflexionTobilloDer"].forEach((key) => {
    const idx = headers.indexOf(key) + 1;
    if (idx > 0) {
      const col = indexToCol(idx);
      for (let row = 2; row <= 51; row++) {
        const cell = worksheet.getCell(`${col}${row}`);
        cell.dataValidation = {
          type: "list",
          allowBlank: true,
          formulae: [dorsiflexionFormula],
          showErrorMessage: true,
          errorTitle: "Valor inválido",
          error: "Seleccione A, B, C o D",
          showInputMessage: true,
          promptTitle: "Dorsiflexión",
          prompt: "Clasifique A-D",
        } as any;
      }
    }
  });

  // IMC automático = peso(kg) / (altura(m))^2
  // altura está en cm en la planilla, convertir a metros con /100
  const pesoIndex = headers.indexOf("peso") + 1;
  const alturaIndex = headers.indexOf("altura") + 1;
  const imcIndex = headers.indexOf("imc") + 1;
  if (pesoIndex > 0 && alturaIndex > 0 && imcIndex > 0) {
    const pesoCol = indexToCol(pesoIndex);
    const alturaCol = indexToCol(alturaIndex);
    const imcCol = indexToCol(imcIndex);
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${imcCol}${row}`);
      cell.value = {
        formula: `IF(AND(${pesoCol}${row}>0,${alturaCol}${row}>0), ${pesoCol}${row}/((${alturaCol}${row}/100)^2), "")`,
      } as any;
      (cell as any).numFmt = "0.00";
    }
  }

  // Clase automática = YEAR(TODAY()) - edad
  const edadIndex = headers.indexOf("edad") + 1;
  const claseIndex = headers.indexOf("clase") + 1;
  if (edadIndex > 0 && claseIndex > 0) {
    const edadCol = indexToCol(edadIndex);
    const claseCol = indexToCol(claseIndex);
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${claseCol}${row}`);
      cell.value = {
        formula: `IF(AND(${edadCol}${row}>0,${edadCol}${row}<100), YEAR(TODAY()) - ${edadCol}${row}, "")`,
      } as any;
      (cell as any).numFmt = "0000";
    }
  }

  // TMB automático (Mifflin-St Jeor):
  // Hombres: 10*peso + 6.25*altura - 5*edad + 5
  // Mujeres: 10*peso + 6.25*altura - 5*edad - 161
  const sexoIndex2 = headers.indexOf("sexo") + 1;
  const tmbIndex = headers.indexOf("tmb") + 1;
  if (
    pesoIndex > 0 &&
    alturaIndex > 0 &&
    edadIndex > 0 &&
    sexoIndex2 > 0 &&
    tmbIndex > 0
  ) {
    const pesoCol = indexToCol(pesoIndex);
    const alturaCol = indexToCol(alturaIndex);
    const edadCol = indexToCol(edadIndex);
    const sexoCol = indexToCol(sexoIndex2);
    const tmbCol = indexToCol(tmbIndex);
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${tmbCol}${row}`);
      cell.value = {
        formula: `IF(AND(${pesoCol}${row}>0,${alturaCol}${row}>0,${edadCol}${row}>0,OR(UPPER(${sexoCol}${row})="M",UPPER(${sexoCol}${row})="F")),ROUND(10*${pesoCol}${row} + 6.25*${alturaCol}${row} - 5*${edadCol}${row} + IF(UPPER(${sexoCol}${row})="M",5,-161),0),"")`,
      } as any;
      (cell as any).numFmt = "0";
    }
  }

  // Índice Q automático = alturaDeVuelo (m) / tiempoDeContacto (s)
  const altVueloIndex = headers.indexOf("alturaDeVuelo(m)") + 1;
  const tContactoIndex = headers.indexOf("tiempoDeContacto(s)") + 1;
  const indiceQIndex = headers.indexOf("indiceQ") + 1;
  if (altVueloIndex > 0 && tContactoIndex > 0 && indiceQIndex > 0) {
    const aCol = indexToCol(altVueloIndex);
    const tCol = indexToCol(tContactoIndex);
    const qCol = indexToCol(indiceQIndex);
    // Notas en encabezados para indicar entrada como enteros (centésimos)
    const altHeaderCell = worksheet.getCell(`${aCol}1`);
    (altHeaderCell as any).note =
      "Ingrese entero (42 = 0,42 m) o decimal (0,42 m). Se normaliza automáticamente.";
    const tHeaderCell = worksheet.getCell(`${tCol}1`);
    (tHeaderCell as any).note =
      "Ingrese entero (21 = 0,21 s) o decimal (0,21 s). Se normaliza automáticamente.";
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${qCol}${row}`);
      cell.value = {
        // Soporta enteros (centésimos) o decimales (unidades reales):
        // aReal = IF(tiene decimales, a, a/100); tReal = IF(tiene decimales, t, t/100)
        formula: `IF(AND(${aCol}${row}>0,${tCol}${row}>0), IF(MOD(${aCol}${row},1)<>0, ${aCol}${row}, ${aCol}${row}/100) / IF(MOD(${tCol}${row},1)<>0, ${tCol}${row}, ${tCol}${row}/100), "")`,
      } as any;
      (cell as any).numFmt = "0.00";
    }
  }

  // Validación: permitir enteros o decimales en alturaDeVuelo(m) y tiempoDeContacto(s)
  if (altVueloIndex > 0) {
    const aCol = indexToCol(altVueloIndex);
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${aCol}${row}`);
      cell.dataValidation = {
        type: "decimal",
        operator: "between",
        allowBlank: true,
        formulae: ["0", "1000"],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error:
          "Ingrese un número válido. Ej: entero 42 (0,42 m) o decimal 0,42.",
        showInputMessage: true,
        promptTitle: "Altura de vuelo",
        prompt:
          "Puede ingresar entero (42 = 0,42 m) o decimal (0,42 m). Se normaliza automáticamente.",
      } as any;
    }
  }
  if (tContactoIndex > 0) {
    const tCol = indexToCol(tContactoIndex);
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${tCol}${row}`);
      cell.dataValidation = {
        type: "decimal",
        operator: "between",
        allowBlank: true,
        formulae: ["0", "1000"],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error:
          "Ingrese un número válido. Ej: entero 21 (0,21 s) o decimal 0,21.",
        showInputMessage: true,
        promptTitle: "Tiempo de contacto",
        prompt:
          "Puede ingresar entero (21 = 0,21 s) o decimal (0,21 s). Se normaliza automáticamente.",
      } as any;
    }
  }

  // sentadillaProfunda dropdown (A-D) - compute column letter dynamically
  const sentadillaIndex = headers.indexOf("sentadillaProfunda") + 1;
  const sentadillaCol = indexToCol(sentadillaIndex);
  for (let row = 2; row <= 51; row++) {
    const cell = worksheet.getCell(`${sentadillaCol}${row}`);
    cell.dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: [dorsiflexionFormula],
      showErrorMessage: true,
      errorTitle: "Valor inválido",
      error: "Seleccione A, B, C o D",
      showInputMessage: true,
      promptTitle: "Sentadilla Profunda",
      prompt: "Clasifique A-D",
    } as any;
  }

  // sexo dropdown (M/F) - dinámico por nombre
  const sexoIndex = headers.indexOf("sexo") + 1;
  if (sexoIndex > 0) {
    const sexoCol = indexToCol(sexoIndex);
    const sexoFormula = '"M,F"';
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${sexoCol}${row}`);
      cell.dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: [sexoFormula],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error: 'Seleccione "M" o "F"',
        showInputMessage: true,
        promptTitle: "Sexo",
        prompt: "Elija M o F",
      } as any;
    }
  }

  // capacidadPulmonarTotal dropdown (A-D)
  const capacidadIndex = headers.indexOf("capacidadPulmonarTotal") + 1;
  if (capacidadIndex > 0) {
    const capacidadCol = indexToCol(capacidadIndex);
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${capacidadCol}${row}`);
      cell.dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: [dorsiflexionFormula],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error: "Seleccione A, B, C o D",
        showInputMessage: true,
        promptTitle: "Capacidad Pulmonar",
        prompt: "Clasifique A-D",
      } as any;
    }
  }

  // coordinacion dropdown (A-D)
  const coordinacionIndex = headers.indexOf("coordinacion") + 1;
  if (coordinacionIndex > 0) {
    const coordinacionCol = indexToCol(coordinacionIndex);
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${coordinacionCol}${row}`);
      cell.dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: [dorsiflexionFormula],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error: "Seleccione A, B, C o D",
        showInputMessage: true,
        promptTitle: "Coordinación",
        prompt: "Clasifique A-D",
      } as any;
    }
  }

  // capacidadPulmunarResidual dropdown (A-D) - corrección
  const capResidIndex = headers.indexOf("capacidadPulmunarResidual") + 1;
  if (capResidIndex > 0) {
    const capResidCol = indexToCol(capResidIndex);
    const letters = ["A", "B", "C", "D"]; // reducido a A-D
    const lettersFormula = `"${letters.join(",")}"`;
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${capResidCol}${row}`);
      cell.dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: [lettersFormula],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error: "Seleccione A, B, C o D",
        showInputMessage: true,
        promptTitle: "Capacidad Pulm. Residual",
        prompt: "Seleccione A-D",
      } as any;
    }
  }

  // biotipo dropdown (Ectomorfo, Mesomorfo, Endomorfo)
  const biotipoIndex = headers.indexOf("biotipo") + 1;
  if (biotipoIndex > 0) {
    const biotipoCol = indexToCol(biotipoIndex);
    const biotipoFormula = '"Ectomorfo,Mesomorfo,Endomorfo"';
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${biotipoCol}${row}`);
      cell.dataValidation = {
        type: "list",
        allowBlank: false,
        formulae: [biotipoFormula],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error: 'Seleccione "Ectomorfo", "Mesomorfo" o "Endomorfo"',
        showInputMessage: true,
        promptTitle: "Biotipo",
        prompt: "Elija una opción",
      } as any;
    }
  }

  // Anchos columnas
  headers.forEach((h, i) => {
    const col = worksheet.getColumn(i + 1);
    col.width = Math.max(h.length + 2, 14);
  });

  // Formatos por defecto
  if (tContactoIndex > 0) {
    const col = worksheet.getColumn(tContactoIndex);
    (col as any).numFmt = "0.00"; // mostrar decimales si se ingresan
  }
  if (altVueloIndex > 0) {
    const col = worksheet.getColumn(altVueloIndex);
    (col as any).numFmt = "0.00"; // mostrar decimales si se ingresan
  }

  const buffer = (await workbook.xlsx.writeBuffer()) as ArrayBuffer;
  return new Uint8Array(buffer);
};

// Función para generar plantilla de clubes
export const generateClubTemplate = (): Uint8Array => {
  const emptyRow: ClubTemplate = {
    nombreClub: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    email: "",
    presidente: "",
    fechaFundacion: "",
  };

  // Generar 10 filas vacías para clubes
  const data: ClubTemplate[] = Array(10)
    .fill(null)
    .map(() => ({ ...emptyRow }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const colWidths = [
    { wch: 25 }, // nombreClub
    { wch: 15 }, // ciudad
    { wch: 25 }, // direccion
    { wch: 15 }, // telefono
    { wch: 25 }, // email
    { wch: 20 }, // presidente
    { wch: 15 }, // fechaFundacion
  ];
  worksheet["!cols"] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Clubes");

  return XLSX.write(workbook, { type: "array", bookType: "xlsx" });
};

// Función para generar plantilla de academias de danza
export const generateDanceAcademyTemplate = (): Uint8Array => {
  const emptyRow: DanceAcademyTemplate = {
    nombreAcademia: "",
    director: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    email: "",
    tiposDanza: "",
  };

  // Generar 10 filas vacías para academias
  const data: DanceAcademyTemplate[] = Array(10)
    .fill(null)
    .map(() => ({ ...emptyRow }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const colWidths = [
    { wch: 25 }, // nombreAcademia
    { wch: 20 }, // director
    { wch: 15 }, // ciudad
    { wch: 25 }, // direccion
    { wch: 15 }, // telefono
    { wch: 25 }, // email
    { wch: 20 }, // tiposDanza
  ];
  worksheet["!cols"] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Academias");

  return XLSX.write(workbook, { type: "array", bookType: "xlsx" });
};

// Función principal para generar plantillas
export const generateTemplate = async (
  templateType: string
): Promise<Uint8Array | null> => {
  switch (templateType) {
    case "player":
      return await generatePlayerTemplate();
    case "club":
      return generateClubTemplate();
    case "danceAcademy":
      return generateDanceAcademyTemplate();
    default:
      return null;
  }
};

// Función para descargar el archivo
export const downloadTemplate = async (
  templateType: string,
  fileName?: string
) => {
  const templateData = await generateTemplate(templateType);
  if (!templateData) {
    console.error("Tipo de plantilla no válido");
    return;
  }
  // Asegurar ArrayBuffer estándar para Blob
  const ab = templateData.buffer.slice(
    templateData.byteOffset,
    templateData.byteOffset + templateData.byteLength
  ) as ArrayBuffer;
  const blob = new Blob([ab as ArrayBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName || `${templateType}-template.xlsx`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

// Función para generar plantilla con ejemplos (para desarrollo/testing)
export const generateExampleTemplate = (
  templateType: string
): Uint8Array | null => {
  switch (templateType) {
    case "player":
      return generatePlayerExampleTemplate();
    case "club":
      return generateClubExampleTemplate();
    case "danceAcademy":
      return generateDanceAcademyExampleTemplate();
    default:
      return null;
  }
};

// Plantilla de jugadores con ejemplos
const generatePlayerExampleTemplate = (): Uint8Array => {
  const exampleData: PlayerTemplate[] = [
    {
      nombre: "Juan Carlos",
      apellido: "Pérez González",
      edad: 22,
      peso: 75,
      altura: 180,
      alturaTorso: 85,
      envergaduraBrazos: 185,
      alturaDeVuelo: 42,
      tiempoDeContacto: 21,
  imc: 23.1,
  tmb: 1850,
  indiceQ: "",
  biotipo: "Mesomorfo",
      lateralidad: "homogenio",
      ojoDirector: "Der.",
      hombro: "Der.",
      brazoDirector: "Der.",
      cintura: "Der.",
      piernaDominante: "Der.",
      piernaDirectora: "Der.",
      dorsiflexionTobilloIzq: "",
      dorsiflexionTobilloDer: "",
      manoDer: "",
      manoIzq: "",
      pieDer: "",
      pieIzq: "",
      sentadillaProfunda: "",
      capacidadPulmonarTotal: "",
      coordinacion: "",
      capacidadPulmunarResidual: "",
      posicion: "Delantero",
      sexo: "M",
      clase: "2002",
      fechaNacimiento: "15/03/2002",
      localidad: "Buenos Aires",
      escuelaClub: "Club Atlético River Plate",
      contacto: "juan.perez@email.com / +54 11 1234-5678",
      deporte: "Fútbol",
    },
    {
      nombre: "María Elena",
      apellido: "García López",
      edad: 19,
      peso: 58,
      altura: 165,
      alturaTorso: 78,
      envergaduraBrazos: 168,
      alturaDeVuelo: 36,
      tiempoDeContacto: 23,
  imc: 21.3,
  tmb: 1450,
  indiceQ: "",
  biotipo: "Ectomorfo",
      lateralidad: "cruzado",
      ojoDirector: "Izq.",
      hombro: "Izq.",
      brazoDirector: "Izq.",
      cintura: "Izq.",
      piernaDominante: "Izq.",
      piernaDirectora: "Izq.",
      dorsiflexionTobilloIzq: "",
      dorsiflexionTobilloDer: "",
      manoDer: "",
      manoIzq: "",
      pieDer: "",
      pieIzq: "",
      sentadillaProfunda: "",
      capacidadPulmonarTotal: "",
      coordinacion: "",
      capacidadPulmunarResidual: "",
      posicion: "Base",
      sexo: "F",
      clase: "2005",
      fechaNacimiento: "22/08/2005",
      localidad: "Córdoba",
      escuelaClub: "Instituto Atlético Central Córdoba",
      contacto: "maria.garcia@email.com / +54 351 9876-5432",
      deporte: "Básquet",
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(exampleData);

  const colWidths = [
    { wch: 15 }, // nombre
    { wch: 15 }, // apellido
    { wch: 8 }, // edad
    { wch: 10 }, // peso
    { wch: 10 }, // altura
    { wch: 12 }, // alturaTorso
    { wch: 18 }, // envergaduraBrazos
    { wch: 14 }, // alturaDeVuelo (m)
    { wch: 16 }, // tiempoDeContacto (s)
    { wch: 8 }, // imc
    { wch: 10 }, // tmb
    { wch: 12 }, // biotipo
    { wch: 12 }, // dominancia
    { wch: 12 }, // ojoDirector
    { wch: 10 }, // hombro
    { wch: 14 }, // brazoDirector
    { wch: 10 }, // cintura
    { wch: 14 }, // piernaDominante
    { wch: 14 }, // piernaDirectora
    { wch: 15 }, // posicion
    { wch: 10 }, // sexo
    { wch: 10 }, // clase
    { wch: 15 }, // fechaNacimiento
    { wch: 15 }, // localidad
    { wch: 20 }, // escuelaClub
    { wch: 25 }, // contacto
    { wch: 15 }, // deporte
    { wch: 12 }, // manoDer
    { wch: 12 }, // manoIzq
    { wch: 10 }, // indiceQ
    { wch: 12 }, // pieDer
    { wch: 12 }, // pieIzq
    { wch: 18 }, // sentadillaProfunda
  ];
  worksheet["!cols"] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Ejemplos");

  return XLSX.write(workbook, { type: "array", bookType: "xlsx" });
};

const generateClubExampleTemplate = (): Uint8Array => {
  const exampleData: ClubTemplate[] = [
    {
      nombreClub: "Club Atlético Ejemplo",
      ciudad: "Buenos Aires",
      direccion: "Av. Libertador 1234",
      telefono: "+54 11 4567-8901",
      email: "info@clubejemplo.com.ar",
      presidente: "Roberto Carlos Martínez",
      fechaFundacion: "15/06/1925",
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(exampleData);
  const colWidths = [
    { wch: 25 },
    { wch: 15 },
    { wch: 25 },
    { wch: 15 },
    { wch: 25 },
    { wch: 20 },
    { wch: 15 },
  ];
  worksheet["!cols"] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Ejemplos");

  return XLSX.write(workbook, { type: "array", bookType: "xlsx" });
};

const generateDanceAcademyExampleTemplate = (): Uint8Array => {
  const exampleData: DanceAcademyTemplate[] = [
    {
      nombreAcademia: "Academia de Danza Arte y Movimiento",
      director: "Ana María Fernández",
      ciudad: "Buenos Aires",
      direccion: "Av. Corrientes 1456, Piso 3",
      telefono: "+54 11 2345-6789",
      email: "info@artemovimiento.com.ar",
      tiposDanza: "Ballet Clásico, Jazz, Hip-Hop, Danza Contemporánea",
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(exampleData);
  const colWidths = [
    { wch: 25 },
    { wch: 20 },
    { wch: 15 },
    { wch: 25 },
    { wch: 15 },
    { wch: 25 },
    { wch: 30 },
  ];
  worksheet["!cols"] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Ejemplos");

  return XLSX.write(workbook, { type: "array", bookType: "xlsx" });
};
