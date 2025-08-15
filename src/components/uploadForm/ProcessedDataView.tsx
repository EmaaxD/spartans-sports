import { useState, useEffect } from "react";
import { FiEye, FiDownload, FiUsers, FiCheck, FiX } from "react-icons/fi";
import {
  ProcessingResult,
  formatPrice,
  classifyIndiceQ,
} from "@src/utils/functions";
import { useI18n } from "@src/hooks";

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
  const [showPreview, setShowPreview] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [playerValue, setPlayerValue] = useState<number>(0);

  const { t } = useI18n();

  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.data.slice(startIndex, endIndex);

  const getColumnConfig = () => {
    switch (templateType) {
      case "player":
        return [
          { key: "nombre", label: t("name") },
          { key: "apellido", label: t("lastName") },
          { key: "edad", label: t("age") },
          { key: "peso", label: t("weight") },
          { key: "altura", label: t("height") },
          // Reordenado: sexo, clase y fechaNacimiento después de altura
          { key: "sexo", label: t("sex") },
          { key: "clase", label: t("class") },
          { key: "fechaNacimiento", label: t("birthDate") },
          { key: "alturaTorso", label: t("torsoHeight") },
          { key: "envergaduraBrazos", label: t("armSpan") },
          { key: "alturaDeVuelo", label: `${t("flightHeight")} (m)` },
          { key: "tiempoDeContacto", label: `${t("contactTime")} (s)` },
          { key: "imc", label: t("imc") },
          { key: "tmb", label: t("tmb") },
          { key: "indiceQ", label: t("indiceQ") },
          { key: "biotipo", label: t("biotype") },
          { key: "lateralidad", label: t("laterality") },
          { key: "ojoDirector", label: t("dominantEye") },
          { key: "hombro", label: t("shoulder") },
          { key: "brazoDirector", label: t("dominantArm") },
          { key: "cintura", label: t("waist") },
          { key: "piernaDominante", label: t("dominantLeg") },
          { key: "piernaDirectora", label: t("directingLeg") },
          { key: "dorsiflexionTobilloIzq", label: t("leftAnkleDorsiflexion") },
          { key: "dorsiflexionTobilloDer", label: t("rightAnkleDorsiflexion") },
          { key: "posicion", label: t("position") },
          { key: "localidad", label: t("locality") },
          { key: "provincia", label: t("province") },
          { key: "escuelaClub", label: t("schoolClub") },
          { key: "contacto", label: t("contact") },
          { key: "deporte", label: t("sport") },
          { key: "manoDer", label: t("rightHand") },
          { key: "manoIzq", label: t("leftHand") },
          { key: "sentadillaProfunda", label: t("deepSquat") },
          { key: "capacidadPulmonarTotal", label: t("totalLungCapacity") },
          { key: "coordinacion", label: t("coordination") },
          {
            key: "capacidadPulmunarResidual",
            label: t("residualLungCapacity"),
          },
          { key: "_valorJugador", label: t("playerValue") },
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
    const dataPlayer = {
      ...data.data[0],
      playerValue,
    };

    if (onSaveData) {
      onSaveData(dataPlayer);
    }
  };

  // Cuando haya datos de jugadores, setear un valor inicial basado en la primera fila visible
  useEffect(() => {
    if (templateType === "player" && paginatedData.length > 0) {
      const first = paginatedData[0] as any;
      const q = first?.indiceQ ?? "";
      const cls = classifyIndiceQ(q);
      setPlayerValue(cls.valorMin === 0 ? cls.valorMax : cls.valorMin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templateType, startIndex, endIndex, data.data.length]);

  return (
    <div className="max-w-[45rem] bg-gray-800/50 border border-gray-600 rounded-lg p-4 mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <FiUsers className="text-blue-400 text-xl" />
          <div>
            <h3 className="text-white font-semibold">{t("processedData")}</h3>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
          >
            <FiEye size={16} />
            {showPreview ? t("hidden") : t("show")} Preview
          </button>

          {onSaveData && (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
            >
              <FiCheck size={16} />
              {t("saveToSystem")}
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
          <p className="text-green-300 text-xs">{t("validRecords")}</p>
        </div>

        <div className="bg-red-500/20 border border-red-500 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <FiX className="text-red-400" />
            <span className="text-red-400 font-medium">
              {data.errors.length}
            </span>
          </div>
          <p className="text-red-300 text-xs">{t("errorsFound")}</p>
        </div>
      </div>

      {/* Errores */}
      {data.errors.length > 0 && (
        <details className="mb-4">
          <summary className="cursor-pointer text-yellow-400 hover:text-yellow-300 font-medium">
            ⚠️ {t("seeErrors")} ({data.errors.length})
          </summary>
          <div className="mt-2 max-h-40 overflow-y-auto bg-red-500/10 border border-red-500/30 rounded-lg p-3">
            {data.errors.map((error, index) => (
              <div
                key={index}
                className="text-red-300 text-sm py-1 border-b border-red-500/20 last:border-b-0"
              >
                <strong>
                  {t("row")} {error.row}
                </strong>{" "}
                - {t("field")} '{error.field}': {error.message}
                {error.value && (
                  <span className="text-red-400">
                    {" "}
                    ({t("value")}: "{error.value}")
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
            <h4 className="text-white font-medium">{t("dataPreview")}</h4>
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
        </div>
      )}

      <div className="flex mt-5">
        <h3 className="text-gray-300 font-semibold text-2xl">
          {t("playerValue")}: {formatPrice(playerValue)}
        </h3>
      </div>
    </div>
  );
};
