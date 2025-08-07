import { useState, useCallback, useContext, useEffect } from "react";

import { TypeFormProps } from "@src/interfaces";
import { uploadFormContext } from "@src/context/uploadForm";

import {
  processExcelFile,
  processCSVFile,
  ProcessingResult,
  ProcessedPlayerData,
  ProcessedClubData,
  ProcessedDanceAcademyData,
} from "@src/utils/functions";

export interface UseFileUploadReturn {
  file: File | null;
  isProcessing: boolean;
  processedData: ProcessingResult<any> | null;
  termsAccepted: boolean;
  selectedTemplateType: "player" | "club" | "danceAcademy" | null;
  error: string | null;
  setFile: (file: File | null) => void;
  setTermsAccepted: (accepted: boolean) => void;
  setSelectedTemplateType: (
    type: "player" | "club" | "danceAcademy" | null
  ) => void;
  processFile: () => Promise<void>;
  clearData: () => void;
}

export const useFileUpload = (): UseFileUploadReturn => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedData, setProcessedData] =
    useState<ProcessingResult<any> | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedTemplateType, setSelectedTemplateType] = useState<
    "player" | "club" | "danceAcademy" | null
  >(null);
  const [error, setError] = useState<string | null>(null);

  const { typeForm } = useContext(uploadFormContext);

  const processFile = useCallback(async () => {
    if (!file) {
      setError("No se ha seleccionado ningún archivo");
      return;
    }

    if (!selectedTemplateType) {
      setError("Debe seleccionar el tipo de plantilla");
      return;
    }

    if (!termsAccepted) {
      setError("Debe aceptar los términos y condiciones");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      let fileToProcess = file;

      // Si es CSV, convertir a XLSX primero
      if (
        file.type === "text/csv" ||
        file.name.toLowerCase().endsWith(".csv")
      ) {
        fileToProcess = await processCSVFile(file);
      }

      // Procesar el archivo Excel
      const result = await processExcelFile(
        fileToProcess,
        selectedTemplateType
      );

      setProcessedData(result);

      // Mostrar resumen en consola para debugging
      console.log("Archivo procesado:", {
        totalRows: result.totalRows,
        validRows: result.validRows,
        errorsCount: result.errors.length,
        data: result.data,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Error desconocido al procesar el archivo";
      setError(errorMessage);
      console.error("Error processing file:", err);
    } finally {
      setIsProcessing(false);
    }
  }, [file, selectedTemplateType, termsAccepted]);

  const clearData = useCallback(() => {
    setFile(null);
    setProcessedData(null);
    setError(null);
    setTermsAccepted(false);
  }, []);

  useEffect(() => {
    if (typeForm && typeForm.trim() !== "") {
      setSelectedTemplateType(typeForm as TypeFormProps);
    }
  }, [typeForm]);

  return {
    file,
    isProcessing,
    processedData,
    termsAccepted,
    selectedTemplateType,
    error,
    setFile,
    setTermsAccepted,
    setSelectedTemplateType,
    processFile,
    clearData,
  };
};
