const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

// Función para generar plantilla de jugadores (con listas desplegables en campos de dominancia)
async function generatePlayerTemplate() {
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

  // Agregar 50 filas vacías para carga masiva
  for (let i = 0; i < 50; i++) {
    worksheet.addRow([]);
  }

  // Columnas con lista desplegable (dominancia y lateridad)
  const selectColsLaterality = ["K", "L", "M", "N", "O", "P", "Q"]; // laterality existing
  const optionListLaterality = ["Izq", "Der"]; // Opciones visibles
  const listFormulaLaterality = `"${optionListLaterality.join(",")}"`;

  // New dorsiflexion columns (after piernaDirectora): now columns R and S (because we inserted 2 headers before posicion)
  // Recompute: A nombre ... Q piernaDirectora, R dorsiflexionTobilloIzq, S dorsiflexionTobilloDer, T posicion, U sexo ...
  const dorsiflexionCols = ["R", "S"]; // dorsiflexionTobilloIzq, dorsiflexionTobilloDer
  const dorsiflexionOptions = ["A", "B", "C", "D"];
  const dorsiflexionFormula = `"${dorsiflexionOptions.join(",")}"`;
  // Nueva columna sentadillaProfunda (columna AG después de pieIzq AF)
  const sentadillaCol = "AG";
  // Nueva columna capacidadPulmonarTotal (columna AH)
  const capacidadPulmonarCol = "AH";
  // Nueva columna coordinacion (columna AI)
  const coordinacionCol = "AI";
  // Nueva columna capacidadPulmunarResidual (columna AJ)
  const capacidadPulmunarResidualCol = "AJ";

  // Aplicar validación a cada celda de esas columnas (filas 2 a 51)
  selectColsLaterality.forEach((col) => {
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${col}${row}`);
      cell.dataValidation = {
        type: "list",
        allowBlank: false,
        formulae: [listFormulaLaterality],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error: 'Debe seleccionar "Izq" o "Der"',
      };
    }
  });

  // Apply dorsiflexion validations
  dorsiflexionCols.forEach((col, idx) => {
    for (let row = 2; row <= 51; row++) {
      const cell = worksheet.getCell(`${col}${row}`);
      cell.dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: [dorsiflexionFormula],
        showErrorMessage: true,
        errorTitle: "Valor inválido",
        error: "Seleccione A, B, C o D",
      };
    }
  });

  // Validación para sentadillaProfunda (A-D) en columna AG
  for (let row = 2; row <= 51; row++) {
    const cell = worksheet.getCell(`${sentadillaCol}${row}`);
    cell.dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: [dorsiflexionFormula],
      showErrorMessage: true,
      errorTitle: "Valor inválido",
      error: "Seleccione A, B, C o D",
    };
  }

  // Validación para capacidadPulmonarTotal (A-D) en columna AH
  for (let row = 2; row <= 51; row++) {
    const cell = worksheet.getCell(`${capacidadPulmonarCol}${row}`);
    cell.dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: [dorsiflexionFormula],
      showErrorMessage: true,
      errorTitle: "Valor inválido",
      error: "Seleccione A, B, C o D",
    };
  }

  // Validación para coordinacion (A-D) en columna AI
  for (let row = 2; row <= 51; row++) {
    const cell = worksheet.getCell(`${coordinacionCol}${row}`);
    cell.dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: [dorsiflexionFormula],
      showErrorMessage: true,
      errorTitle: "Valor inválido",
      error: "Seleccione A, B, C o D",
    };
  }

  // Validación para capacidadPulmunarResidual (A-D) en columna AJ (corrección)
  const letrasAZ = ["A", "B", "C", "D"]; // reducido a A-D
  const formulaAZ = `"${letrasAZ.join(",")}"`;
  for (let row = 2; row <= 51; row++) {
    const cell = worksheet.getCell(`${capacidadPulmunarResidualCol}${row}`);
    cell.dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: [formulaAZ],
      showErrorMessage: true,
      errorTitle: "Valor inválido",
      error: "Seleccione A, B, C o D",
    };
  }

  // Ajustar ancho de columnas (un poco más amplio para textos largos)
  headers.forEach((_, idx) => {
    const col = worksheet.getColumn(idx + 1);
    col.width = Math.max(headers[idx].length + 2, 15);
  });

  // Devolver buffer en lugar de escribir directamente aquí
  const arrayBuffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(arrayBuffer);
}

// Función para generar plantilla de clubes
const generateClubTemplate = () => {
  const emptyRow = {
    nombreClub: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    email: "",
    presidente: "",
    fechaFundacion: "",
  };

  // Generar 10 filas vacías para clubes
  const data = Array(10)
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

  return XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
};

// Función para generar plantilla de academias de danza
const generateDanceAcademyTemplate = () => {
  const emptyRow = {
    nombreAcademia: "",
    director: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    email: "",
    tiposDanza: "",
  };

  // Generar 10 filas vacías para academias
  const data = Array(10)
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

  return XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
};

const generateTemplate = async (templateType: string) => {
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

const templateTypes = ["player", "club", "danceAcademy"];
const publicTemplatesDir = path.join(__dirname, "../public/templates");

// Asegurar que el directorio existe
if (!fs.existsSync(publicTemplatesDir)) {
  fs.mkdirSync(publicTemplatesDir, { recursive: true });
}

// Ejecutar generación (manejo async para player)
(async () => {
  for (const templateType of templateTypes) {
    try {
      const templateData = await generateTemplate(templateType);
      if (templateData) {
        const filePath = path.join(publicTemplatesDir, `${templateType}.xlsx`);
        fs.writeFileSync(filePath, templateData);
        console.log(`✅ Generated: ${templateType}.xlsx`);
      }
    } catch (error) {
      console.error(`❌ Error generating ${templateType}:`, error);
    }
  }
  console.log("\n🎉 All templates generated successfully!");
  console.log(`📁 Location: ${publicTemplatesDir}`);
})();
