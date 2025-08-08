# Sistema de Validaciones para Plantillas Excel

## Validaciones para Plantilla de Jugadores (Player)

### Campos Básicos
- **nombre**: Requerido, no puede estar vacío
- **apellido**: Requerido, no puede estar vacío
- **edad**: Debe ser entre 1 y 100 años

### Medidas Físicas
- **peso**: Debe ser entre 1 y 300 kg
- **altura**: Debe ser entre 50 y 250 cm
- **alturaTorso**: Debe ser entre 1 y 150 cm
- **envergaduraBrazos**: Debe ser entre 1 y 300 cm

### Índices Corporales
- **imc**: Índice de Masa Corporal, debe ser entre 10 y 50
- **tmb**: Tasa Metabólica Basal, debe ser entre 500 y 4000 calorías
- **biotipo**: Requerido, seleccionar de lista desplegable: "Ectomorfo", "Mesomorfo" o "Endomorfo"

### Campos de Dominancia (Lateralidad) - Con Listas Desplegables
- **dominancia**: Requerido, seleccionar de lista desplegable: "Izq." o "Der."
- **ojoDirector**: Ojo director, requerido, seleccionar de lista desplegable: "Izq." o "Der."
- **hombro**: Hombro dominante, requerido, seleccionar de lista desplegable: "Izq." o "Der."
- **brazoDirector**: Brazo director, requerido, seleccionar de lista desplegable: "Izq." o "Der."
- **cintura**: Cintura dominante, requerida, seleccionar de lista desplegable: "Izq." o "Der."
- **piernaDominante**: Pierna dominante, requerida, seleccionar de lista desplegable: "Izq." o "Der."
- **piernaDirectora**: Pierna directora, requerida, seleccionar de lista desplegable: "Izq." o "Der."

**Nota**: Las celdas de dominancia tienen validación de datos con listas desplegables. Al hacer clic en la celda aparecerá una flecha para seleccionar entre las dos opciones.

## Cómo usar las Listas Desplegables en Excel

### Campos con Listas Desplegables:
1. **biotipo**: Ectomorfo, Mesomorfo, Endomorfo
2. **dominancia**: Izq., Der.
3. **ojoDirector**: Izq., Der.
4. **hombro**: Izq., Der.
5. **brazoDirector**: Izq., Der.
6. **cintura**: Izq., Der.
7. **piernaDominante**: Izq., Der.
8. **piernaDirectora**: Izq., Der.
9. **sexo**: M, F

### Instrucciones de Uso:
1. Haga clic en cualquier celda de estos campos
2. Aparecerá una pequeña flecha hacia abajo (▼) en el lado derecho de la celda
3. Haga clic en la flecha para abrir la lista de opciones
4. Seleccione la opción deseada de la lista
5. La opción se insertará automáticamente en la celda

### Ventajas:
- **Sin errores de tipeo**: No es posible escribir valores incorrectos
- **Consistencia**: Todos los datos siguen el mismo formato
- **Rapidez**: Selección más rápida que escribir

### Información Deportiva
- **posicion**: Requerida, debe tener al menos 2 caracteres
- **sexo**: Opcional, seleccionar de lista desplegable: "M" o "F" (si se completa)
- **deporte**: Requerido, debe tener al menos 3 caracteres

### Clasificación Temporal
- **clase**: Requerida, debe ser un año de 4 dígitos entre 1900 y el año actual (ej: 2005)
- **fechaNacimiento**: Requerida, formato DD/MM/YYYY (ej: 15/03/2005)
  - La fecha debe ser válida según el calendario
  - Se valida coherencia con la edad (diferencia máxima de 1 año)

### Información de Contacto y Ubicación
- **localidad**: Requerida, debe tener al menos 2 caracteres
- **escuelaClub**: Requerido, debe tener al menos 3 caracteres
- **contacto**: Opcional, pero si se proporciona debe ser:
  - Email válido, o
  - Teléfono válido (formatos argentinos), o
  - Ambos separados por " / " (ej: "juan@email.com / +54 11 1234-5678")

## Formatos de Teléfono Válidos (Argentina)
- Con código de país: +54 11 1234-5678
- Sin código de país: 11 1234-5678
- Números locales: 1234-5678
- Formato compacto: 1123456789
- Se aceptan espacios, guiones y paréntesis en el formato

## Validaciones para Plantilla de Clubes (Club)
- **nombreClub**: Requerido, no puede estar vacío
- **email**: Opcional, pero si se proporciona debe tener formato válido

## Validaciones para Plantilla de Academias de Danza (DanceAcademy)
- **nombreAcademia**: Requerido, no puede estar vacío
- **email**: Opcional, pero si se proporciona debe tener formato válido

## Estructura de Archivos Excel

### Plantilla de Jugadores
Columnas (en orden):
1. nombre
2. apellido  
3. edad
4. peso
5. altura
6. alturaTorso
7. envergaduraBrazos
8. imc
9. tmb
10. biotipo
11. dominancia
12. ojoDirector
13. hombro
14. brazoDirector
15. cintura
16. piernaDominante
17. piernaDirectora
18. posicion
19. sexo
20. clase
21. fechaNacimiento
22. localidad
23. escuelaClub
24. contacto
25. deporte

### Ejemplo de Datos Válidos
```
Juan Carlos | Pérez González | 22 | 75 | 180 | 85 | 185 | 23.1 | 1850 | Mesomorfo | Der. | Der. | Der. | Der. | Der. | Der. | Der. | Delantero | M | 2002 | 15/03/2002 | Buenos Aires | Club Atlético River Plate | juan.perez@email.com / +54 11 1234-5678 | Fútbol
```## Manejo de Errores
- Cada error incluye: número de fila, campo afectado, valor problemático y mensaje descriptivo
- Las filas con errores no se procesan, solo las válidas
- Se muestra resumen con total de filas procesadas vs. filas válidas
