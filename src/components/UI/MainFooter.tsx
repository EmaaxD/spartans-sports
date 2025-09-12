import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { uiContext } from "@src/context/ui";
import { useI18n } from "@src/hooks";

import { MainContainer } from "../containers";
import { MainDialog } from "./MainDialog";
import { ContentFooterData } from "./ContentFooterData";

import { footerLinks } from "@src/utils/const";

import LogoFooter from "@src/assets/img/logos/logo-completo-color.png";
import LogoCrediCart from "@src/assets/img/card_logos.png";

export const MainFooter = () => {
  const [isClient, setIsClient] = useState(false);

  const {
    openFootData,
    titleFootData,
    handleSetTitleFootData,
    handleSetContentFootData,
    handleToggleOpenFootData,
  } = useContext(uiContext);

  const { t } = useI18n();

  const handleClickLink = (titleId: string) => {
    handleToggleOpenFootData();
    handleSetTitleFootData(titleId);
    handleSetContentFootData(titleId);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita render en el SSR

  return (
    <>
      <footer id="main-footer" className={`bg-black flex flex-col gap-5 py-5`}>
        <MainContainer>
          <div className="flex flex-col justify-start gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 md:gap-0">
              <div className="w-32 flex">
                <Image
                  src={LogoFooter}
                  alt="Logo"
                  className="w-full object-cover"
                />
              </div>

              <div className="flex flex-row items-center flex-wrap sm:flex-nowrap gap-3">
                {footerLinks.map((item, index) => (
                  <button
                    key={index}
                    className="bg-transparent transition-colors text-[0.6rem] md:text-[0.7rem] lg:text-sm p-2 hover:bg-[#19191994] rounded-lg"
                    onClick={() => handleClickLink(item.data)}
                  >
                    <span className="text-white">{t(item.label)}</span>
                  </button>
                ))}
                <a
                  className="bg-transparent transition-colors text-[0.6rem] md:text-[0.7rem] lg:text-sm p-2 hover:bg-[#19191994] rounded-lg"
                  href="mailto:jorgealbertolindon9@gmail.com"
                >
                  <span className="text-white">{t("contactMe")}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-80 md:w-96 md:mx-auto">
                <Image
                  src={LogoCrediCart}
                  alt="Logo CrediCart"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </MainContainer>
      </footer>

      <MainDialog
        isOpen={openFootData}
        title={titleFootData}
        onHandleClose={() => handleToggleOpenFootData()}
      >
        <ContentFooterData />
      </MainDialog>
    </>
  );
};
