// Utilidad para clasificar el Índice Q y devolver el valor del jugador
// Basado en la tabla proporcionada (categorías y rangos)

export interface QClassificationResult {
  categoria: string;
  indiceQMin: number | null; // límites numéricos del rango (null cuando es abierto por debajo o arriba)
  indiceQMax: number | null;
  valorMin: number; // Spartans Coins
  valorMax: number;
  valorRangoStr: string; // "90.000 – 100.000"
}

const RANGES: {
  categoria: string;
  min: number | null; // inclusive
  max: number | null; // inclusive (null => infinito superior)
  valorMin: number;
  valorMax: number;
}[] = [
  { categoria: "Súper élite mundial", min: 3.30, max: null, valorMin: 90000, valorMax: 100000 },
  { categoria: "Élite internacional", min: 3.0, max: 3.29, valorMin: 80000, valorMax: 90000 },
  { categoria: "Élite competitivo PRO", min: 2.70, max: 2.99, valorMin: 65000, valorMax: 80000 },
  { categoria: "Profesional alto", min: 2.40, max: 2.69, valorMin: 50000, valorMax: 65000 },
  { categoria: "Semiprofesional / avanzado", min: 2.10, max: 2.39, valorMin: 35000, valorMax: 50000 },
  { categoria: "Amateur alto / desarrollo", min: 1.80, max: 2.09, valorMin: 20000, valorMax: 35000 },
  { categoria: "Amateur básico", min: 1.50, max: 1.79, valorMin: 10000, valorMax: 20000 },
  { categoria: "Recreativo / formativo", min: null, max: 1.49, valorMin: 0, valorMax: 10000 },
];

const formatNumber = (n: number) =>
  n.toLocaleString("es-AR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export const classifyIndiceQ = (rawIndiceQ: string | number): QClassificationResult => {
  let value: number | null = null;
  if (typeof rawIndiceQ === "number") {
    value = isFinite(rawIndiceQ) ? rawIndiceQ : null;
  } else if (typeof rawIndiceQ === "string") {
    const cleaned = rawIndiceQ.replace(/,/g, ".").replace(/[^0-9.]/g, "");
    const parsed = parseFloat(cleaned);
    if (!isNaN(parsed)) value = parsed;
  }

  if (value === null) {
    return {
      categoria: "Sin clasificación",
      indiceQMin: null,
      indiceQMax: null,
      valorMin: 0,
      valorMax: 0,
      valorRangoStr: "0",
    };
  }

  const range = RANGES.find((r) => {
    const minOk = r.min === null || value! >= r.min;
    const maxOk = r.max === null || value! <= r.max;
    return minOk && maxOk;
  });

  if (!range) {
    return {
      categoria: "Sin clasificación",
      indiceQMin: null,
      indiceQMax: null,
      valorMin: 0,
      valorMax: 0,
      valorRangoStr: "0",
    };
  }

  return {
    categoria: range.categoria,
    indiceQMin: range.min,
    indiceQMax: range.max,
    valorMin: range.valorMin,
    valorMax: range.valorMax,
    valorRangoStr: `${formatNumber(range.valorMin)} – ${formatNumber(range.valorMax)}`,
  };
};
