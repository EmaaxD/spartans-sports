import { useState, useCallback } from 'react';
import { downloadTemplate } from '@src/utils/functions';

export interface UseTemplatesReturn {
  selectedTemplate: string;
  isDownloading: boolean;
  setSelectedTemplate: (template: string) => void;
  handleDownload: () => void;
  downloadTemplateByType: (templateType: string, fileName?: string) => void;
}

export const useTemplates = (): UseTemplatesReturn => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const downloadTemplateByType = useCallback(async (templateType: string, fileName?: string) => {
    try {
      setIsDownloading(true);
      downloadTemplate(templateType, fileName || `${templateType}-template.xlsx`);
    } catch (error) {
      console.error('Error downloading template:', error);
    } finally {
      setIsDownloading(false);
    }
  }, []);

  const handleDownload = useCallback(() => {
    if (selectedTemplate) {
      downloadTemplateByType(selectedTemplate);
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
