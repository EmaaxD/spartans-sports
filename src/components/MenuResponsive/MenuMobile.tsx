import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import { uiContext } from "@src/context/ui";

import { SocialNetworks } from "../UI";
import { MainHeaderLink } from "../UI/MainHeaderLink";
import { UserLogin } from "../UserLogin";

import { headerLinks } from "@src/utils/const";
import LogoApp from "@src/assets/img/logos/logo-completo-color.png";

export const MenuMobile = () => {
  const { openMenu, handleToggleMenu } = useContext(uiContext);

  return (
    <>
      <div
        className={`fixed inset-0 ${
          openMenu
            ? "bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-purple-900/80 backdrop-blur-sm"
            : ""
        } z-50`}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 left-0 w-2/3 sm:w-1/2 bg-gradient-to-b from-slate-900/95 via-blue-900/90 to-slate-800/95 backdrop-blur-xl border-r border-blue-500/20 shadow-2xl flex flex-col justify-between pt-8 pb-3 px-6"
        >
          <div className="relative z-10 flex flex-col gap-12">
            {/* Header */}
            <div className="flex flex-row justify-between items-center">
              <div className="w-32" data-aos="zoom-in">
                <Image
                  src={LogoApp}
                  className="w-full object-cover"
                  alt="logo app"
                />
              </div>

              <button
                onClick={handleToggleMenu}
                className="relative group p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-xl border border-red-400/30 hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300 transform hover:scale-110"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <IoClose
                  className="text-white group-hover:text-red-300 transition-colors duration-300"
                  size={24}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="flex flex-col gap-3">
              {/* User Login */}
              <div className="mb-4">
                <UserLogin isMobile />
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                {headerLinks.map((item, index) => (
                  <MainHeaderLink
                    key={index}
                    {...item}
                    index={index}
                    isMobile
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer con Social Networks */}
          <div className="relative z-10">
            <div className="relative bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
              <SocialNetworks />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
