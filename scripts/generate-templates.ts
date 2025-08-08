const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

// Función para generar plantilla de jugadores
async function generatePlayerTemplate() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Jugadores");

  // Encabezados
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
  worksheet.addRow(headers);

  // Fila vacía para cargar datos
  worksheet.addRow([]);

  // Lista de opciones
  const optionList = ["Izq", "Der"];
  const selectCols = ["K", "L", "M", "N", "O", "P", "Q"];

  selectCols.forEach((col) => {
    // Fila 2 (porque la 1 es encabezado)
    const cell = worksheet.getCell(`${col}2`);
    cell.dataValidation = {
      type: "list",
      allowBlank: false,
      formulae: [`"${optionList.join(",")}"`],
      showErrorMessage: true,
      errorTitle: "Valor inválido",
      error: `Debe seleccionar "Izq" o "Der"`,
    };
  });

  // Ajustar ancho de columnas
  headers.forEach((_, idx) => {
    worksheet.getColumn(idx + 1).width = 15;
  });

  // Guardar archivo
  const filePath = path.join(__dirname, "player.xlsx");
  await workbook.xlsx.writeFile(filePath);
  console.log(`✅ Archivo creado en: ${filePath}`);
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

const generateTemplate = (templateType: any) => {
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

const templateTypes = ["player", "club", "danceAcademy"];
const publicTemplatesDir = path.join(__dirname, "../public/templates");

// Asegurar que el directorio existe
if (!fs.existsSync(publicTemplatesDir)) {
  fs.mkdirSync(publicTemplatesDir, { recursive: true });
}

// Generar cada plantilla
templateTypes.forEach((templateType) => {
  try {
    const templateData = generateTemplate(templateType);
    if (templateData) {
      const filePath = path.join(publicTemplatesDir, `${templateType}.xlsx`);
      fs.writeFileSync(filePath, templateData);
      console.log(`✅ Generated: ${templateType}.xlsx`);
    }
  } catch (error) {
    console.error(`❌ Error generating ${templateType}:`, error);
  }
});

console.log("\n🎉 All templates generated successfully!");
console.log(`📁 Location: ${publicTemplatesDir}`);
