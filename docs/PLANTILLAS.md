# Guía de Plantillas Excel - Spartans Sports

## 📋 Descripción
Este sistema permite descargar plantillas Excel personalizadas para diferentes tipos de datos deportivos. Las plantillas están diseñadas para ser llenadas manualmente y luego procesadas por el sistema.

## 🔄 Tipos de Plantillas Disponibles

### 1. **Plantilla de Jugadores** (`player`)
Campos incluidos:
- **nombre**: Nombre del jugador
- **apellido**: Apellido del jugador  
- **edad**: Edad en años (número)
- **peso**: Peso en kilogramos (número)
- **altura**: Altura en centímetros (número)
- **posicion**: Posición que juega (ej: Delantero, Arquero, Base, etc.)
- **sexo**: M (Masculino) o F (Femenino)
- **clase**: Año de nacimiento
- **fechaNacimiento**: Formato DD/MM/YYYY
- **localidad**: Ciudad de residencia
- **escuelaClub**: Nombre de la escuela o club al que pertenece
- **contacto**: Email y/o teléfono de contacto
- **deporte**: Deporte que practica

**Capacidad**: 50 filas para datos

### 2. **Plantilla de Clubes** (`club`)
Campos incluidos:
- **nombreClub**: Nombre completo del club
- **ciudad**: Ciudad donde se encuentra
- **direccion**: Dirección física completa
- **telefono**: Teléfono de contacto
- **email**: Email institucional
- **presidente**: Nombre del presidente actual
- **fechaFundacion**: Fecha de fundación (DD/MM/YYYY)

**Capacidad**: 10 filas para datos

### 3. **Plantilla de Academias de Danza** (`danceAcademy`)
Campos incluidos:
- **nombreAcademia**: Nombre de la academia
- **director**: Nombre del director
- **ciudad**: Ciudad de ubicación
- **direccion**: Dirección completa
- **telefono**: Teléfono de contacto
- **email**: Email de contacto
- **tiposDanza**: Tipos de danza que se enseñan (separados por comas)

**Capacidad**: 10 filas para datos

## 💻 Uso desde la Aplicación

### Descarga Dinámica
1. Selecciona el tipo de plantilla desde el menú desplegable
2. Haz clic en el botón "Download" 
3. El archivo se descargará automáticamente con las filas vacías listas para rellenar

### Características Técnicas
- **Generación dinámica**: Las plantillas se generan en tiempo real usando la librería `xlsx`
- **Formato optimizado**: Columnas con anchos ajustados para mejor visualización
- **Múltiples filas**: Plantillas con múltiples filas vacías para carga masiva de datos
- **Nombres descriptivos**: Archivos se descargan con nombres como `player-template.xlsx`

## 🛠 Para Desarrolladores

### Estructura de Archivos
```
src/
├── utils/
│   └── functions/
│       └── excelTemplates.ts    # Lógica de generación de plantillas
├── hooks/
│   └── useTemplates.ts          # Hook para manejo de plantillas
└── components/
    └── uploadForm/
        └── FirstStep.tsx        # Componente de UI

scripts/
└── generate-templates.ts        # Script para generar archivos estáticos

public/
└── templates/                   # Plantillas generadas estáticamente
    ├── player.xlsx
    ├── club.xlsx
    └── danceAcademy.xlsx
```

### Comandos Disponibles
```bash
# Generar plantillas estáticas
npm run generate:templates

# Desarrollo
npm run dev

# Construcción
npm run build
```

### APIs Disponibles
- `GET /api/templates/[templateType]` - Descarga plantilla por tipo
- Tipos válidos: `player`, `club`, `danceAcademy`

## 🎯 Mejoras Futuras Posibles
- [ ] Validación de datos en el frontend antes de la carga
- [ ] Plantillas con datos de ejemplo
- [ ] Soporte para más tipos de entidades deportivas
- [ ] Integración con base de datos para carga automática
- [ ] Plantillas personalizables por usuario

## 🔧 Configuración
Las plantillas utilizan la librería `xlsx` para la generación. Para modificar los campos o estructura:

1. Edita las interfaces en `src/utils/functions/excelTemplates.ts`
2. Actualiza las funciones de generación correspondientes
3. Ejecuta `npm run generate:templates` para actualizar archivos estáticos

---

**Nota**: Las plantillas están optimizadas para Excel y son compatibles con LibreOffice Calc y Google Sheets.
