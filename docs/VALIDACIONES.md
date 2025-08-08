# Validaciones de Campos - Sistema de Carga Excel

## 📋 Validaciones Implementadas para Jugadores

### ✅ **Campos Requeridos**
Todos estos campos son **obligatorios** y no pueden estar vacíos:

- **nombre**: Nombre del jugador
- **apellido**: Apellido del jugador
- **posicion**: Posición que juega (mínimo 2 caracteres)
- **clase**: Año de nacimiento (formato YYYY)
- **fechaNacimiento**: Fecha en formato DD/MM/YYYY
- **localidad**: Ciudad de residencia (mínimo 2 caracteres)
- **escuelaClub**: Nombre de escuela o club (mínimo 3 caracteres)
- **deporte**: Deporte que practica (mínimo 3 caracteres)

### 🔢 **Validaciones Numéricas**

#### **Edad**
- ✅ Debe ser entre **1 y 100 años**
- ❌ Valores como 0, -5, 150 serán rechazados

#### **Peso**
- ✅ Debe ser entre **1 y 300 kg**
- ❌ Valores como 0, -10, 400 serán rechazados

#### **Altura**
- ✅ Debe ser entre **50 y 250 cm**
- ❌ Valores como 0, 30, 300 serán rechazados

### 📅 **Validaciones de Fecha**

#### **Clase (Año)**
- ✅ Formato: **YYYY** (4 dígitos)
- ✅ Rango: **1900 - Año actual**
- ✅ Ejemplos válidos: `2005`, `1998`, `2010`
- ❌ Ejemplos inválidos: `05`, `22`, `2030`

#### **Fecha de Nacimiento**
- ✅ Formato: **DD/MM/YYYY**
- ✅ Fecha válida del calendario
- ✅ Coherencia con la edad (diferencia máxima de 1 año)
- ✅ Ejemplos válidos: `15/03/2005`, `1/12/1998`
- ❌ Ejemplos inválidos: `30/02/2000`, `15-03-2005`, `2005/03/15`

### 📱 **Validación de Contacto**
El campo contacto acepta múltiples formatos:

#### **Solo Teléfono**
- ✅ `+54 11 1234-5678`
- ✅ `11-1234-5678`
- ✅ `1123456789`
- ✅ `011 4567-8901`

#### **Solo Email**
- ✅ `juan.perez@email.com`
- ✅ `maria@club.com.ar`

#### **Ambos (separados por " / ")**
- ✅ `juan@email.com / +54 11 1234-5678`
- ✅ `maria.garcia@club.com / 11-9876-5432`

### 🚻 **Validación de Sexo**
- ✅ Valores aceptados: **M**, **F**, **m**, **f**
- ❌ Valores rechazados: `Masculino`, `Femenino`, `H`, `Mujer`

## 🎯 **Validaciones Cruzadas**

### **Coherencia Edad - Fecha de Nacimiento**
- El sistema calcula la edad a partir de la fecha de nacimiento
- Si la diferencia entre la edad ingresada y la calculada es mayor a 1 año, se genera un error
- Ejemplo: Si fecha es `15/03/2005` y edad es `25`, será rechazado (edad calculada ≈ 19)

## 📊 **Ejemplos de Datos Válidos**

```
Nombre: Juan Carlos
Apellido: Pérez González  
Edad: 19
Peso: 75
Altura: 180
Posicion: Delantero
Sexo: M
Clase: 2005
Fecha Nacimiento: 15/03/2005
Localidad: Buenos Aires
Escuela/Club: Club Atlético River Plate
Contacto: juan.perez@email.com / +54 11 1234-5678
Deporte: Fútbol
```

## ❌ **Errores Comunes y Soluciones**

| Error | Causa | Solución |
|-------|-------|----------|
| "El peso debe ser entre 1 y 300 kg" | Peso = 0 o vacío | Ingresar peso válido (ej: 70) |
| "La fecha debe tener formato DD/MM/YYYY" | Formato incorrecto | Usar formato 15/03/2005 |
| "La edad no coincide con la fecha" | Inconsistencia | Verificar ambos campos |
| "El sexo debe ser M o F" | Valor incorrecto | Usar solo M o F |
| "El contacto debe ser válido" | Formato incorrecto | Usar email, teléfono o ambos |

## 🔧 **Configuración Técnica**

### **Patrones de Teléfono Argentino**
- 10 dígitos: `1123456789`
- 8 dígitos locales: `12345678` 
- Buenos Aires: `11` + 8 dígitos
- Provincias: códigos `2xx`, `3xx`, `4xx` + 7-8 dígitos
- Con código país: `+54` seguido del número

### **Regex de Validación**
- **Email**: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
- **Fecha**: `/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/`
- **Año**: `/^\d{4}$/`

---

**💡 Tip**: Siempre revisa los errores detallados en la interfaz después de procesar un archivo para corregir los datos antes de volver a intentar.
