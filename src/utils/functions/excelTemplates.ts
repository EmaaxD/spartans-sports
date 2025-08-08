import * as XLSX from "xlsx";

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
export const generatePlayerTemplate = (): Uint8Array => {
  // Crear múltiples filas vacías para facilitar el llenado masivo
  const emptyRow: PlayerTemplate = {
    nombre: "",
    apellido: "",
    edad: 0,
    peso: 0,
    altura: 0,
    alturaTorso: 0,
    envergaduraBrazos: 0,
    imc: 0,
    tmb: 0,
    biotipo: "",
    dominancia: "",
    ojoDirector: "",
    hombro: "",
    brazoDirector: "",
    cintura: "",
    piernaDominante: "",
    piernaDirectora: "",
    posicion: "",
    sexo: "",
    clase: "",
    fechaNacimiento: "",
    localidad: "",
    escuelaClub: "",
    contacto: "",
    deporte: "",
  };

  // Generar 50 filas vacías para más capacidad
  const data: PlayerTemplate[] = Array(1)
    .fill(null)
    .map(() => ({ ...emptyRow }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  // Agregar comentarios/validaciones a los headers
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
    "posicion",
    "sexo",
    "clase",
    "fechaNacimiento",
    "localidad",
    "escuelaClub",
    "contacto",
    "deporte",
  ];

  // Ajustar el ancho de las columnas
  const colWidths = [
    { wch: 15 }, // nombre
    { wch: 15 }, // apellido
    { wch: 8 }, // edad
    { wch: 10 }, // peso (kg)
    { wch: 10 }, // altura (cm)
    { wch: 12 }, // alturaTorso (cm)
    { wch: 18 }, // envergaduraBrazos (cm)
    { wch: 8 }, // imc
    { wch: 10 }, // tmb (calorías)
    { wch: 12 }, // biotipo
    { wch: 12 }, // dominancia
    { wch: 12 }, // ojoDirector
    { wch: 10 }, // hombro
    { wch: 14 }, // brazoDirector
    { wch: 10 }, // cintura
    { wch: 14 }, // piernaDominante
    { wch: 14 }, // piernaDirectora
    { wch: 15 }, // posicion
    { wch: 10 }, // sexo (M/F)
    { wch: 10 }, // clase
    { wch: 15 }, // fechaNacimiento (DD/MM/YYYY)
    { wch: 15 }, // localidad
    { wch: 20 }, // escuelaClub
    { wch: 20 }, // contacto (email/teléfono)
    { wch: 15 }, // deporte
  ];
  worksheet["!cols"] = colWidths;

  // Agregar validaciones de datos (listas desplegables)
  const dataValidations: any[] = [];
  const totalRows = data.length + 1; // +1 para incluir header

  // Validaciones SOLO para campos de dominancia (columnas K-Q, índices 10-16)
  const dominanceColumns = ["K", "L", "M", "N", "O", "P", "Q"]; // dominancia, ojoDirector, hombro, brazoDirector, cintura, piernaDominante, piernaDirectora

  dominanceColumns.forEach((col) => {
    for (let row = 2; row <= totalRows; row++) {
      dataValidations.push({
        sqref: `${col}${row}`,
        type: "list",
        allowBlank: false,
        formula1: "Izq.,Der.",
      });
    }
  });

  // Agregar las validaciones al worksheet
  worksheet["!dataValidations"] = dataValidations;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Jugadores");

  return XLSX.write(workbook, { type: "array", bookType: "xlsx" });
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
export const generateTemplate = (templateType: string): Uint8Array | null => {
  switch (templateType) {
    case "player":
      return generatePlayerTemplate();
    case "club":
      return generateClubTemplate();
    case "danceAcademy":
      return generateDanceAcademyTemplate();
    default:
      return null;
  }
};

// Función para descargar el archivo
export const downloadTemplate = (templateType: string, fileName?: string) => {
  const templateData = generateTemplate(templateType);

  if (!templateData) {
    console.error("Tipo de plantilla no válido");
    return;
  }

  const blob = new Blob([templateData], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName || `${templateType}-template.xlsx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
