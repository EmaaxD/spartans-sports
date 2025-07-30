import { useContext } from "react";
import { useSession } from "next-auth/react";
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

  const { data: session } = useSession();

  return (
    <>
      <div
        className={`fixed inset-0 ${
          openMenu ? "bg-[#1f1f1f] bg-opacity-60" : ""
        } z-50`}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 left-0 w-2/3 sm:w-1/2 bg-black/90 flex flex-col justify-between py-7 px-5"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-row justify-between items-center">
              <div className="w-28" data-aos="zoom-in">
                <Image
                  src={LogoApp}
                  className="w-full object-cover"
                  alt="logo app"
                />
              </div>

              <button
                onClick={handleToggleMenu}
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <IoClose className="text-white" size={23} />
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              <li>
                <UserLogin isMobile />
              </li>

              {headerLinks.map((item, index) => (
                <MainHeaderLink key={index} {...item} index={index} isMobile />
              ))}
            </div>
          </div>

          <SocialNetworks />
        </motion.div>
      </div>
    </>
  );
};
