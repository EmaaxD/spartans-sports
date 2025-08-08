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
  imc: number;
  tmb: number;
  biotipo: string;
  dominancia: string;
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

  const headers = [
    "nombre",
    "apellido",
    "edad",
    "peso",
    "altura",
    "alturaTorso",
    "envergaduraBrazos",
    "imc",
    "tmb",
    "biotipo",
    "dominancia",
    "ojoDirector",
    "hombro",
    "brazoDirector",
    "cintura",
    "piernaDominante",
    "piernaDirectora",
    "dorsiflexionTobilloIzq",
    "dorsiflexionTobilloDer",
    "posicion",
    "sexo",
    "clase",
    "fechaNacimiento",
    "localidad",
    "escuelaClub",
    "contacto",
    "deporte",
    "manoDer",
    "manoIzq",
    "indiceQ",
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

  // Validaciones (columnas K-Q)
  const selectCols = ["K", "L", "M", "N", "O", "P", "Q"]; // laterality
  const optionList = ["Izq", "Der"]; // sin punto
  const formula = `"${optionList.join(",")}"`;
  const dorsiflexionCols = ["R", "S"]; // nuevas columnas
  const dorsiflexionOptions = ["A", "B", "C", "D"];
  const dorsiflexionFormula = `"${dorsiflexionOptions.join(",")}"`;
  selectCols.forEach((col) => {
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${col}${row}`);
      cell.dataValidation = {
        type: "list",
        allowBlank: false,
        formulae: [formula],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error: 'Seleccione "Izq" o "Der"',
        showInputMessage: true,
        promptTitle: "Opciones",
        prompt: "Use la flecha o Alt+↓ para ver el listado", // guía de uso
      } as any;
    }
  });

  dorsiflexionCols.forEach((col) => {
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
  });

  // sentadillaProfunda dropdown (A-D) - compute column letter dynamically
  const sentadillaIndex = headers.indexOf("sentadillaProfunda") + 1;
  const indexToCol = (n: number) => {
    let s = "";
    while (n > 0) {
      const m = (n - 1) % 26;
      s = String.fromCharCode(65 + m) + s;
      n = Math.floor((n - 1) / 26);
    }
    return s;
  };
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

  // Anchos columnas
  headers.forEach((h, i) => {
    const col = worksheet.getColumn(i + 1);
    col.width = Math.max(h.length + 2, 14);
  });

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
      imc: 23.1,
      tmb: 1850,
      biotipo: "Mesomorfo",
      dominancia: "Der.",
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
      indiceQ: "",
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
      imc: 21.3,
      tmb: 1450,
      biotipo: "Ectomorfo",
      dominancia: "Izq.",
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
      indiceQ: "",
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
