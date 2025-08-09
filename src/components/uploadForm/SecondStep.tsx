import { useContext } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FiUpload, FiAlertCircle } from "react-icons/fi";

import { useI18n, useFileUpload } from "@src/hooks";

import { ProcessedDataView } from "./ProcessedDataView";
import { MainSelect } from "../UI";
import { uploadFormContext } from "@src/context/uploadForm";
import { templateCategories } from "@src/utils/const";

const fileTypes = ["XLSX", "CSV"];

export const SecondStep = () => {
  const { typeForm, handleSetTypeForm } = useContext(uploadFormContext);

  const { t } = useI18n();
  const {
    file,
    isProcessing,
    processedData,
    termsAccepted,
    selectedTemplateType,
    error,
    setFile,
    setTermsAccepted,
    processFile,
    clearData,
  } = useFileUpload();

  const handleFileChange = (uploadedFile: File | File[]) => {
    const fileToSet = Array.isArray(uploadedFile)
      ? uploadedFile[0]
      : uploadedFile;
    setFile(fileToSet || null);
  };

  const handleSaveData = (data: any[]) => {
    // Aquí puedes implementar la lógica para guardar los datos en tu base de datos
    console.log("Guardando datos:", data);
    // Ejemplo: enviar a API
    // await saveDataToAPI(data, selectedTemplateType);
  };

  const handleUpload = async () => {
    await processFile();
  };

  const handleChange = (value: string) => {
    // Nunca guardar 'null' literal
    const v = value && value !== "null" ? value : "";
    handleSetTypeForm(v as any);
  };

  return (
    <>
      <div className="flex flex-col gap-3 flex-1">
        <h2 className="text-white text-2xl font-bold" data-aos="zoom-in">
          {t("secondStepUploadForm")}
        </h2>
        <p className="text-white">{t("textUploadFile")}</p>

        {!processedData && (
          <div className="w-fit">
            <MainSelect
              label={t("labelSelectOption")}
              name="options"
              optionDisabled={t("labelSelectOption")}
              value={typeForm as string}
              options={templateCategories}
              onHandleChangeValue={handleChange}
            />
          </div>
        )}

        {!processedData && (
          <FileUploader
            handleChange={handleFileChange}
            name="file"
            types={fileTypes}
            classes="custom_dropzone"
            label={t("textDragAndDropForm")}
            uploadedLabel={file ? (file as File).name : t("noFileUploaded")}
            hoverTitle={t("dropFileHere")}
            maxSize={10}
          />
        )}

        {/* Mostrar errores */}
        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500 rounded-lg">
            <FiAlertCircle className="text-red-400 flex-shrink-0" />
            <span className="text-red-400 text-sm">{error}</span>
          </div>
        )}

        {/* Mostrar resultado del procesamiento */}
        {processedData && selectedTemplateType && (
          <ProcessedDataView
            data={processedData}
            templateType={selectedTemplateType}
            onSaveData={handleSaveData}
          />
        )}

        {/* Términos y condiciones */}
        {!processedData && (
          <div className="flex items-center gap-2 mt-3">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-white">
              {t("termsAndConditions")}
            </label>
          </div>
        )}

        {/* Botón de subida */}
        {!processedData && (
          <button
            onClick={handleUpload}
            disabled={
              !file || !selectedTemplateType || !termsAccepted || isProcessing
            }
            className="w-fit bg-red-600 text-white flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiUpload />
            {isProcessing ? "Procesando..." : t("uploadBtn")}
          </button>
        )}

        {/* Botón para limpiar datos */}
        {processedData && (
          <button
            onClick={clearData}
            className="w-fit bg-gray-600 text-white flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Limpiar y subir otro archivo
          </button>
        )}
      </div>
    </>
  );
};
