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
  {
    categoria: "Súper élite mundial",
    min: 3.3,
    max: null,
    valorMin: 90000,
    valorMax: 100000,
  },
  {
    categoria: "Élite internacional",
    min: 3.0,
    max: 3.29,
    valorMin: 80000,
    valorMax: 90000,
  },
  {
    categoria: "Élite competitivo PRO",
    min: 2.7,
    max: 2.99,
    valorMin: 65000,
    valorMax: 80000,
  },
  {
    categoria: "Profesional alto",
    min: 2.4,
    max: 2.69,
    valorMin: 50000,
    valorMax: 65000,
  },
  {
    categoria: "Semiprofesional / avanzado",
    min: 2.1,
    max: 2.39,
    valorMin: 35000,
    valorMax: 50000,
  },
  {
    categoria: "Amateur alto / desarrollo",
    min: 1.8,
    max: 2.09,
    valorMin: 20000,
    valorMax: 35000,
  },
  {
    categoria: "Amateur básico",
    min: 1.5,
    max: 1.79,
    valorMin: 10000,
    valorMax: 20000,
  },
  {
    categoria: "Recreativo / formativo",
    min: null,
    max: 1.49,
    valorMin: 0,
    valorMax: 10000,
  },
];
const RANGESFEMALE: {
  categoria: string;
  min: number | null; // inclusive
  max: number | null; // inclusive (null => infinito superior)
  valorMin: number;
  valorMax: number;
}[] = [
  {
    categoria: "Súper élite mundial",
    min: 3.3,
    max: null,
    valorMin: 90000,
    valorMax: 100000,
  },
  {
    categoria: "Élite internacional",
    min: 2.96,
    max: 3.25,
    valorMin: 80000,
    valorMax: 90000,
  },
  {
    categoria: "Élite competitivo PRO",
    min: 2.4,
    max: 2.95,
    valorMin: 65000,
    valorMax: 80000,
  },
  {
    categoria: "Profesional alto",
    min: 2.0,
    max: 2.65,
    valorMin: 50000,
    valorMax: 65000,
  },
  {
    categoria: "Semiprofesional / avanzado",
    min: 1.9,
    max: 2.35,
    valorMin: 35000,
    valorMax: 50000,
  },
  {
    categoria: "Amateur alto / desarrollo",
    min: 1.4,
    max: 2.05,
    valorMin: 20000,
    valorMax: 35000,
  },
  {
    categoria: "Amateur básico",
    min: 1.1,
    max: 1.75,
    valorMin: 10000,
    valorMax: 20000,
  },
  {
    categoria: "Recreativo / formativo",
    min: null,
    max: 1.45,
    valorMin: 0,
    valorMax: 10000,
  },
];

const formatNumber = (n: number) =>
  n.toLocaleString("es-AR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

export const classifyIndiceQ = (
  rawIndiceQ: string | number,
  sexo: string
): QClassificationResult => {
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

  const range =
    sexo === "M"
      ? RANGES.find((r) => {
          const minOk = r.min === null || value! >= r.min;
          const maxOk = r.max === null || value! <= r.max;
          return minOk && maxOk;
        })
      : RANGESFEMALE.find((r) => {
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
    valorRangoStr: `${formatNumber(range.valorMin)} – ${formatNumber(
      range.valorMax
    )}`,
  };
};

// Determina la posición Top 100 (1=mejor, 100=peor) usando RANGES y el valor del jugador en pesos
export const getPlayerRank = (
  playerValue: number | string,
  sexo: string
): number => {
  // Normalizar posibles formatos "90.000" / "90,000.50" / "90000"
  const parseVal = (v: number | string | null | undefined): number => {
    if (v === null || v === undefined) return 0;
    if (typeof v === "number") return isFinite(v) ? v : 0;
    const onlyDigits = String(v)
      .trim()
      .replace(/[\s]/g, "")
      .replace(/[^0-9.,-]/g, "");
    let normalized = onlyDigits;
    if (onlyDigits.includes(".") && onlyDigits.includes(",")) {
      // asume es-AR: puntos como miles, coma como decimal
      normalized = onlyDigits.replace(/\./g, "").replace(",", ".");
    } else if (onlyDigits.includes(",") && !onlyDigits.includes(".")) {
      normalized = onlyDigits.replace(",", ".");
    } else {
      normalized = onlyDigits.replace(/\./g, "");
    }
    const n = parseFloat(normalized);
    return isNaN(n) ? 0 : n;
  };

  const value = Math.max(0, parseVal(playerValue));

  // Preparar límites globales desde RANGES
  const globalMin =
    sexo === "M"
      ? Math.min(...RANGES.map((r) => r.valorMin))
      : Math.min(...RANGESFEMALE.map((r) => r.valorMin));
  const globalMax =
    sexo === "M"
      ? Math.max(...RANGES.map((r) => r.valorMax))
      : Math.max(...RANGESFEMALE.map((r) => r.valorMax));
  const clamped = Math.max(globalMin, Math.min(globalMax, value));

  // Calcular "ancho" de cada rango en pesos y asignar porciones del Top 100 proporcionalmente
  const rangesDesc =
    sexo === "M"
      ? [...RANGES].sort((a, b) => b.valorMax - a.valorMax)
      : [...RANGESFEMALE].sort((a, b) => b.valorMax - a.valorMax);
  const widths = rangesDesc.map((r) => Math.max(1, r.valorMax - r.valorMin));
  const totalWidth = widths.reduce((acc, w) => acc + w, 0);

  let allocated = 0;
  const positionsPerRange = widths.map((w, i) => {
    if (i === widths.length - 1) return 100 - allocated; // el último completa 100
    const p = Math.round((w / totalWidth) * 100);
    allocated += p;
    return p;
  });

  // Construir bloques con offsets de posición
  let start = 1;
  const blocks = rangesDesc.map((r, i) => {
    const count = positionsPerRange[i];
    const block = { ...r, start, count };
    start += count;
    return block;
  });

  // Encontrar bloque por valor
  const block =
    blocks.find((b) => clamped >= b.valorMin && clamped <= b.valorMax) ||
    blocks[blocks.length - 1];

  // Posición relativa dentro del bloque (valor más alto => mejores posiciones)
  const width = Math.max(1, block.valorMax - block.valorMin);
  const rel = (block.valorMax - clamped) / width; // 0 en el techo del rango
  const idxInBlock = Math.min(
    block.count - 1,
    Math.max(0, Math.floor(rel * block.count))
  );

  const position = block.start + idxInBlock;
  return Math.max(1, Math.min(100, position));
};
