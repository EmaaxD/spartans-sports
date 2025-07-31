import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";

import { useI18n } from "@src/hooks";

import { uiContext } from "@src/context/ui";

import { MainContainer } from "@src/components/containers";
import { UserLogin } from "../UserLogin";
import { MainHeaderLink } from "./MainHeaderLink";
import { MenuMobile } from "../MenuResponsive";
import { HeaderSkeleton } from "../loadings";

import { headerLinks } from "@src/utils/const";
import LogoHeader from "@src/assets/img/logos/logo-completo-color.png";
import { LanguageSelector } from "./LanguageSelector";

export const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [loadingEbooks, setLoadingEbooks] = useState(true);

  const { changeLanguage } = useI18n();

  const { openMenu, handleToggleMenu } = useContext(uiContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // set loading state to false after 1000ms
    const timer = setTimeout(() => {
      setLoadingEbooks(false);
    }, 1000);
  }, []);

  return (
    <>
      {loadingEbooks ? (
        <MainContainer>
          <div className="mt-3">
            <HeaderSkeleton />
          </div>
        </MainContainer>
      ) : (
        <header
          id="main-header"
          className={`fixed w-full py-3 z-30 ${
            isScrolled ? "scrolled-class" : ""
          }`}
        >
          <MainContainer>
            <div className="flex flex-row justify-between items-center">
              <Link href="/">
                <div className="w-28 md:w-32 flex" data-aos="zoom-in">
                  <Image
                    src={LogoHeader}
                    alt="Logo"
                    className="w-full object-cover"
                  />
                </div>
              </Link>

              <div className="menu_desk flex-row items-center">
                <nav className="flex flex-row items-center gap-6">
                  <ul className="flex flex-row gap-8">
                    {headerLinks.map((item, index) => (
                      <MainHeaderLink key={index} {...item} index={index} />
                    ))}
                  </ul>

                  <UserLogin />

                  <LanguageSelector />
                </nav>
              </div>

              <div
                className="menu_mobile items-center gap-6"
                data-aos="zoom-in"
              >
                <LanguageSelector />

                <button
                  className="bg-red-600 p-2 grid place-items-center text-white rounded-full"
                  onClick={handleToggleMenu}
                >
                  <BiMenuAltRight size={20} />
                </button>
              </div>
            </div>
          </MainContainer>
        </header>
      )}

      <AnimatePresence>{openMenu && <MenuMobile />}</AnimatePresence>
    </>
  );
};
