const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

// Función para generar plantilla de jugadores
const generatePlayerTemplate = () => {
  const emptyRow = {
    nombre: "",
    apellido: "",
    edad: 0,
    peso: 0,
    altura: 0,
    posicion: "",
    sexo: "",
    clase: "",
    fechaNacimiento: "",
    localidad: "",
    escuelaClub: "",
    contacto: "",
    deporte: "",
  };

  // Generar 50 filas vacías
  const data = Array(50)
    .fill(null)
    .map(() => ({ ...emptyRow }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const colWidths = [
    { wch: 15 }, // nombre
    { wch: 15 }, // apellido
    { wch: 8 }, // edad
    { wch: 10 }, // peso
    { wch: 10 }, // altura
    { wch: 15 }, // posicion
    { wch: 10 }, // sexo
    { wch: 10 }, // clase
    { wch: 15 }, // fechaNacimiento
    { wch: 15 }, // localidad
    { wch: 20 }, // escuelaClub
    { wch: 20 }, // contacto
    { wch: 15 }, // deporte
  ];
  worksheet["!cols"] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Jugadores");

  return XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
};

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

const generateTemplate = (templateType: string) => {
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
