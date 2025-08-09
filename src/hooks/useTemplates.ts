import { useState, useCallback, useContext } from "react";
import { downloadTemplate } from "@src/utils/functions";
import { uploadFormContext } from "@src/context/uploadForm";

export interface UseTemplatesReturn {
  selectedTemplate: string;
  isDownloading: boolean;
  setSelectedTemplate: (template: string) => void;
  handleDownload: () => void;
  downloadTemplateByType: (templateType: string, fileName?: string) => void;
}

export const useTemplates = (): UseTemplatesReturn => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const { handleSetStepForm } = useContext(uploadFormContext);

  const downloadTemplateByType = useCallback(
    async (templateType: string, fileName?: string) => {
      try {
        setIsDownloading(true);
        downloadTemplate(
          templateType,
          fileName || `${templateType}-template.xlsx`
        );

        return true;
      } catch (error) {
        console.error("Error downloading template:", error);
      } finally {
        setIsDownloading(false);
      }
    },
    []
  );

  const handleDownload = useCallback(async () => {
    if (selectedTemplate) {
      const resp = await downloadTemplateByType(selectedTemplate);

      if (resp) {
        handleSetStepForm(2);
      }
    }
  }, [selectedTemplate, downloadTemplateByType]);

  return {
    selectedTemplate,
    isDownloading,
    setSelectedTemplate,
    handleDownload,
    downloadTemplateByType,
  };
};
