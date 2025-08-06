import { useState } from "react";
import { FiUpload } from "react-icons/fi";

import { useI18n } from "@src/hooks";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["XLSX", "CSV"];

export const SecondStep = () => {
  const [file, setFile] = useState<File | null>(null);

  const { t } = useI18n();

  const handleFileChange = (file: File | File[]) => {
    if (Array.isArray(file)) {
      setFile(file[0] || null);
    } else {
      setFile(file);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 flex-1">
        <h2 className="text-white text-2xl font-bold" data-aos="zoom-in">
          {t("secondStepUploadForm")}
        </h2>
        <p className="text-white">{t("textUploadFile")}</p>

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
        {/* input type check for term and condition */}
        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="terms" className="text-white">
            {t("termsAndConditions")}
          </label>
        </div>

        <button className="w-fit bg-red-600 text-white flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors mt-5">
          <FiUpload />
          {t("uploadBtn")}
        </button>
      </div>
    </>
  );
};
