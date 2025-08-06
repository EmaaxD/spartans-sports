import { useState } from "react";
import { MdDownload } from "react-icons/md";

import { useI18n } from "@src/hooks";

import { MainSelect } from "../UI";

import { templateCategories } from "@src/utils/const";

export const FirstStep = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const { t } = useI18n();

  const handleChange = (value: string) => {
    setSelectedOption(value);
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
            value={selectedOption}
            options={templateCategories}
            onHandleChangeValue={handleChange}
          />
        </div>

        {selectedOption && (
          <div className="w-fit">
            <a
              href={`/templates/${selectedOption}.xlsx`}
              download={`${selectedOption}.xlsx`}
              className="flex flex-row items-center gap-2 text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <MdDownload size={20} />
              {t("download")}
            </a>
          </div>
        )}
      </div>
    </>
  );
};
