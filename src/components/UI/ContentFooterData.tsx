import { useContext } from "react";

import { uiContext } from "@src/context/ui";
import { useI18n } from "@src/hooks";

export const ContentFooterData = () => {
  const { contentFootData } = useContext(uiContext);

  const { t } = useI18n();

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-sm text-gray-600">{t(contentFootData)}</p>
      </div>
    </>
  );
};
