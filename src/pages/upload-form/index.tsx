import React, { useEffect, useState } from "react";

import { useI18n } from "@src/hooks";

import { ContainerContentPage } from "@src/components/containers";
import { SportsLayout } from "@src/components/layouts";
import { FirstStep, SecondStep } from "@src/components/uploadForm";

const UploadForm = () => {
  const [isClient, setIsClient] = useState(false);

  const { t } = useI18n();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita render en el SSR

  return (
    <>
      <SportsLayout layoutId="upload-form-screen">
        <ContainerContentPage>
          <h1
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold capitalize"
            data-aos="zoom-in"
          >
            {t("uploadForm")}
          </h1>

          <div className="bg-white/15 flex flex-col md:flex-row gap-8 px-6 py-5 rounded-lg">
            <FirstStep />
            <SecondStep />
          </div>
        </ContainerContentPage>
      </SportsLayout>
    </>
  );
};

export default UploadForm;
