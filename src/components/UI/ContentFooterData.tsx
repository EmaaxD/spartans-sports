import { useContext } from "react";

import { uiContext } from "@src/context/ui";

export const ContentFooterData = () => {
  const { contentFootData } = useContext(uiContext);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-sm text-gray-600">{contentFootData}</p>
      </div>
    </>
  );
};
