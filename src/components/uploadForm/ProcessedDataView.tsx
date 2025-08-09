import { useState, useEffect } from "react";
import { FiEye, FiDownload, FiUsers, FiCheck, FiX } from "react-icons/fi";
import {
  ProcessingResult,
  ProcessedPlayerData,
  ProcessedClubData,
  ProcessedDanceAcademyData,
  formatPrice,
  classifyIndiceQ,
} from "@src/utils/functions";

interface ProcessedDataViewProps {
  data: ProcessingResult<any>;
  templateType: "player" | "club" | "danceAcademy";
  onSaveData?: (data: any[]) => void;
}

export const ProcessedDataView: React.FC<ProcessedDataViewProps> = ({
  data,
  templateType,
  onSaveData,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [playerValue, setPlayerValue] = useState<number>(0);

  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.data.length / itemsPerPage);

  // Cuando haya datos de jugadores, setear un valor inicial basado en la primera fila visible
  useEffect(() => {
    if (templateType === "player" && paginatedData.length > 0) {
      const first = paginatedData[0] as any;
      const q = first?.indiceQ ?? "";
      const cls = classifyIndiceQ(q);
      setPlayerValue(cls.valorMin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templateType, startIndex, endIndex, data.data.length]);

  const getColumnConfig = () => {
    switch (templateType) {
      case "player":
        return [
          { key: "nombre", label: "Nombre" },
          { key: "apellido", label: "Apellido" },
          { key: "edad", label: "Edad" },
          { key: "peso", label: "Peso" },
          { key: "altura", label: "Altura" },
          { key: "alturaTorso", label: "Altura Torso" },
          { key: "envergaduraBrazos", label: "Envergadura Brazos" },
          { key: "imc", label: "IMC" },
          { key: "tmb", label: "TMB" },
          { key: "biotipo", label: "Biotipo" },
          { key: "lateralidad", label: "Lateralidad" },
          { key: "ojoDirector", label: "Ojo Director" },
          { key: "hombro", label: "Hombro" },
          { key: "brazoDirector", label: "Brazo Director" },
          { key: "cintura", label: "Cintura" },
          { key: "piernaDominante", label: "Pierna Dominante" },
          { key: "piernaDirectora", label: "Pierna Directora" },
          { key: "dorsiflexionTobilloIzq", label: "Dorsiflexión Tobillo Izq." },
          { key: "dorsiflexionTobilloDer", label: "Dorsiflexión Tobillo Der." },
          { key: "posicion", label: "Posición" },
          { key: "sexo", label: "Sexo" },
          { key: "clase", label: "Clase" },
          { key: "fechaNacimiento", label: "Fecha Nacimiento" },
          { key: "localidad", label: "Localidad" },
          { key: "escuelaClub", label: "Escuela/Club" },
          { key: "contacto", label: "Contacto" },
          { key: "deporte", label: "Deporte" },
          { key: "manoDer", label: "Mano Der." },
          { key: "manoIzq", label: "Mano Izq." },
          { key: "indiceQ", label: "Índice Q" },
          { key: "pieDer", label: "Pie Der." },
          { key: "pieIzq", label: "Pie Izq." },
          { key: "sentadillaProfunda", label: "Sentadilla Profunda" },
          { key: "capacidadPulmonarTotal", label: "Capacidad Pulmonar Total" },
          { key: "coordinacion", label: "Coordinación" },
          {
            key: "capacidadPulmunarResidual",
            label: "Capacidad Pulm. Residual",
          },
          { key: "_valorJugador", label: "Valor (Spartans Coins)" },
        ];
      case "club":
        return [
          { key: "nombreClub", label: "Nombre Club" },
          { key: "ciudad", label: "Ciudad" },
          { key: "direccion", label: "Dirección" },
          { key: "telefono", label: "Teléfono" },
          { key: "email", label: "Email" },
          { key: "presidente", label: "Presidente" },
          { key: "fechaFundacion", label: "F. Fundación" },
        ];
      case "danceAcademy":
        return [
          { key: "nombreAcademia", label: "Nombre Academia" },
          { key: "director", label: "Director" },
          { key: "ciudad", label: "Ciudad" },
          { key: "direccion", label: "Dirección" },
          { key: "telefono", label: "Teléfono" },
          { key: "email", label: "Email" },
          { key: "tiposDanza", label: "Tipos Danza" },
        ];
      default:
        return [];
    }
  };

  const renderTableRow = (item: any, index: number) => {
    const columns = getColumnConfig();
    const enriched = { ...item };
    if (templateType === "player") {
      const qClassification = classifyIndiceQ(item.indiceQ);
      enriched._valorJugador = qClassification.valorRangoStr;
      // Al hacer click en la fila, setear el valor del jugador con el rango mínimo
      enriched._onClick = () => setPlayerValue(qClassification.valorMin);
    }
    return (
      <tr
        key={index}
        className={`border-b border-gray-600 ${
          templateType === "player" ? "cursor-pointer hover:bg-gray-700/40" : ""
        }`}
        onClick={(enriched as any)._onClick}
      >
        {columns.map((col) => {
          const value = (enriched as any)[col.key];
          return (
            <td
              key={col.key}
              className="px-3 py-2 text-sm text-white truncate max-w-32"
              title={value?.toString?.()}
            >
              {value?.toString?.() || "-"}
            </td>
          );
        })}
      </tr>
    );
  };

  const handleSave = () => {
    if (onSaveData) {
      onSaveData(data.data);
    }
  };

  return (
    <div className="max-w-[45rem] bg-gray-800/50 border border-gray-600 rounded-lg p-4 mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <FiUsers className="text-blue-400 text-xl" />
          <div>
            <h3 className="text-white font-semibold">Datos Procesados</h3>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
          >
            <FiEye size={16} />
            {showPreview ? "Ocultar" : "Ver"} Preview
          </button>

          {onSaveData && (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
            >
              <FiCheck size={16} />
              Guardar en Sistema
            </button>
          )}
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-green-500/20 border border-green-500 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <FiCheck className="text-green-400" />
            <span className="text-green-400 font-medium">{data.validRows}</span>
          </div>
          <p className="text-green-300 text-xs">Registros válidos</p>
        </div>

        <div className="bg-red-500/20 border border-red-500 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <FiX className="text-red-400" />
            <span className="text-red-400 font-medium">
              {data.errors.length}
            </span>
          </div>
          <p className="text-red-300 text-xs">Errores encontrados</p>
        </div>
      </div>

      {/* Errores */}
      {data.errors.length > 0 && (
        <details className="mb-4">
          <summary className="cursor-pointer text-yellow-400 hover:text-yellow-300 font-medium">
            ⚠️ Ver errores ({data.errors.length})
          </summary>
          <div className="mt-2 max-h-40 overflow-y-auto bg-red-500/10 border border-red-500/30 rounded-lg p-3">
            {data.errors.map((error, index) => (
              <div
                key={index}
                className="text-red-300 text-sm py-1 border-b border-red-500/20 last:border-b-0"
              >
                <strong>Fila {error.row}</strong> - Campo '{error.field}':{" "}
                {error.message}
                {error.value && (
                  <span className="text-red-400">
                    {" "}
                    (Valor: "{error.value}")
                  </span>
                )}
              </div>
            ))}
          </div>
        </details>
      )}

      {/* Preview de datos */}
      {showPreview && data.data.length > 0 && (
        <div className="border border-gray-600 rounded-lg overflow-hidden">
          <div className="bg-gray-700 px-4 py-2 border-b border-gray-600">
            <h4 className="text-white font-medium">Preview de Datos</h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead className="bg-gray-700">
                <tr>
                  {getColumnConfig().map((col) => (
                    <th
                      key={col.key}
                      className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-800">
                {paginatedData.map((item, index) =>
                  renderTableRow(item, index)
                )}
              </tbody>
            </table>
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="bg-gray-700 px-4 py-3 border-t border-gray-600 flex items-center justify-between">
              <div className="text-sm text-gray-300">
                Mostrando {startIndex + 1} a{" "}
                {Math.min(endIndex, data.data.length)} de {data.data.length}{" "}
                registros
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-gray-600 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded text-sm"
                >
                  Anterior
                </button>
                <span className="px-3 py-1 text-gray-300 text-sm">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-gray-600 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded text-sm"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex mt-5">
        <h3 className="text-gray-300 font-semibold text-2xl">
          Valor del jugador: {formatPrice(playerValue)}
        </h3>
      </div>
    </div>
  );
};
