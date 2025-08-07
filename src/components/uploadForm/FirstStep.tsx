import { useContext } from "react";
import { MdDownload } from "react-icons/md";

import { useI18n, useTemplates } from "@src/hooks";
import { uploadFormContext } from "@src/context/uploadForm";

import { MainSelect } from "../UI";

import { templateCategories } from "@src/utils/const";

export const FirstStep = () => {
  const { handleSetTypeForm } = useContext(uploadFormContext);

  const { t } = useI18n();
  const {
    selectedTemplate,
    isDownloading,
    setSelectedTemplate,
    handleDownload,
  } = useTemplates();

  const handleChange = (value: string) => {
    setSelectedTemplate(value);
    handleSetTypeForm(value as any);
  };

  return (
    <>
      <div className="flex flex-col gap-3 flex-1 border-r border-dashed border-white/50">
        <h2 className="text-white text-2xl font-bold" data-aos="zoom-in">
          {t("firstStepUploadForm")}
        </h2>
        <p className="text-white">{t("textDownloadSpreadsheet")}</p>
        <div className="w-fit">
          <MainSelect
            label={t("labelSelectOption")}
            name="options"
            optionDisabled={t("labelSelectOption")}
            value={selectedTemplate}
            options={templateCategories}
            onHandleChangeValue={handleChange}
          />
        </div>

        {selectedTemplate && (
          <div className="w-fit">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex flex-row items-center gap-2 text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MdDownload size={20} />
              {isDownloading ? t("downloading") : t("download")}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
