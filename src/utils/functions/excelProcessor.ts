import * as XLSX from "xlsx";
import { cleanString, isValidEmail, parseNumber } from "./validations";

// Interfaces para los datos procesados
export interface ProcessedPlayerData {
  nombre: string;
  apellido: string;
  edad: number;
  peso: number;
  altura: number;
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
  templateType: "player" | "club" | "danceAcademy"
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

    // Procesar según el tipo de plantilla
    switch (templateType) {
      case "player":
        return processPlayerData(jsonData);
      case "club":
        return processClubData(jsonData);
      case "danceAcademy":
        return processDanceAcademyData(jsonData);
      default:
        throw new Error("Tipo de plantilla no válido");
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
    "posicion",
    "sexo",
    "clase",
    "fechaNacimiento",
    "localidad",
    "escuelaClub",
    "contacto",
    "deporte",
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
    if (row.every((cell) => !cell || cell.toString().trim() === "")) {
      return; // Saltar filas vacías
    }

    const playerData: ProcessedPlayerData = {
      nombre: cleanString(row[0]),
      apellido: cleanString(row[1]),
      edad: parseNumber(row[2]) || 0,
      peso: parseNumber(row[3]) || 0,
      altura: parseNumber(row[4]) || 0,
      posicion: cleanString(row[5]),
      sexo: cleanString(row[6]),
      clase: cleanString(row[7]),
      fechaNacimiento: cleanString(row[8]),
      localidad: cleanString(row[9]),
      escuelaClub: cleanString(row[10]),
      contacto: cleanString(row[11]),
      deporte: cleanString(row[12]),
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

    if (row.every((cell) => !cell || cell.toString().trim() === "")) {
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

    if (row.every((cell) => !cell || cell.toString().trim() === "")) {
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

  if (data.sexo && !["M", "F", "m", "f"].includes(data.sexo)) {
    errors.push({
      row: rowNumber,
      field: "sexo",
      value: data.sexo,
      message: "El sexo debe ser M o F",
    });
  }

  if (data.contacto && data.contacto.includes("@")) {
    // Solo validar email si parece contener uno
    const emailMatch = data.contacto.match(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
    );
    if (emailMatch && !isValidEmail(emailMatch[0])) {
      errors.push({
        row: rowNumber,
        field: "contacto",
        value: data.contacto,
        message: "El email no tiene un formato válido",
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
