import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { PiSignOutBold } from "react-icons/pi";
import { HiUser } from "react-icons/hi2";
import { BiSolidBookAdd } from "react-icons/bi";

import { UserLoginProps } from "@src/interfaces";
import { useI18n } from "@src/hooks";

import { uiContext } from "@src/context/ui";

import { LoginButton } from "../UI";

export const UserLogin: React.FC<UserLoginProps> = ({ isMobile = false }) => {
  const [isClient, setIsClient] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState<string>("");

  const { data: session, status } = useSession();

  const { handleToggleMenu } = useContext(uiContext);

  const { push } = useRouter();

  const { t } = useI18n();

  const handleSignOut = async () => {
    try {
      if (isMobile) {
        handleToggleMenu();
      }
      await signOut();
      push("/");
    } catch (error) {}
  };

  const handleNavigate = (href: string) => {
    if (isMobile) {
      handleToggleMenu();
      setTimeout(() => {
        push(href);
      }, 100);
    }
  };

  useEffect(() => {
    if (session) {
      setAvatarSrc(session.user?.image || "");
      return;
    }
  }, [session]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita render en el SSR

  if (status === "loading") {
    return <p className="text-gray-200">Cargando...</p>;
  }

  return (
    <>
      {session ? (
        <>
          <div className="hidden md:flex">
            <Menu>
              {({ open }) => (
                <>
                  <div data-aos="zoom-in">
                    <MenuButton
                      className={`flex flex-row items-center gap-3 transition-colors text-white hover:text-gray-300 outline-none`}
                    >
                      <div className="w-7 h-7 grid place-items-center box-border">
                        <Image
                          src={avatarSrc}
                          alt="avatar"
                          width={28}
                          height={28}
                          className="w-full h-full rounded-full"
                        />
                      </div>

                      <span
                        className={`${isMobile ? "flex" : "hidden lg:flex"}`}
                      >
                        {t("myAccount")}
                      </span>
                    </MenuButton>
                  </div>

                  <AnimatePresence>
                    {open && (
                      <MenuItems
                        static
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        anchor="bottom"
                        className="bg-white/90 w-fit flex flex-col px-4 py-2 rounded-lg z-50 gap-1.5 mt-2 outline-none"
                      >
                        <MenuItem>
                          <Link href="/profile">
                            <div className="flex flex-row items-center gap-2 data-[focus]:bg-blue-100">
                              <HiUser className="text-gray-600" />
                              <span className="capitalize">{t("profile")}</span>
                            </div>
                          </Link>
                        </MenuItem>

                        <MenuItem>
                          <Link href="/upload-form">
                            <div className="flex flex-row items-center gap-2 data-[focus]:bg-blue-100">
                              <BiSolidBookAdd className="text-gray-600" />
                              <span className="capitalize">
                                {t("uploadForm")}
                              </span>
                            </div>
                          </Link>
                        </MenuItem>

                        <hr className="flex-1 border-t-[0.5px] border-gray-300 my-2" />

                        <MenuItem>
                          <button
                            className="flex flex-row items-center gap-2"
                            onClick={handleSignOut}
                          >
                            <PiSignOutBold className="text-gray-600" />
                            <span className="capitalize">{t("logout")}</span>
                          </button>
                        </MenuItem>
                      </MenuItems>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Menu>
          </div>

          <div className="flex md:hidden">
            {/* Caja con blur que incluye todo */}
            <div className="w-full">
              <div className="relative bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-400/30">
                {/* Foto y nombre del usuario */}
                <div className="flex flex-row items-center gap-3 mb-4 pb-3 border-b border-white/20">
                  <div className="w-10 h-10 grid place-items-center box-border">
                    <Image
                      src={avatarSrc}
                      alt="avatar"
                      width={40}
                      height={40}
                      className="w-full h-full rounded-full border-2 border-white/30"
                    />
                  </div>
                  <span className="text-white font-medium">
                    {session.user?.name || "Mi cuenta"}
                  </span>
                </div>

                {/* Tres opciones dentro de la misma caja */}
                <div className="space-y-2">
                  <button
                    className="flex flex-row items-center gap-3 text-white hover:text-indigo-300 transition-colors p-2 rounded-lg hover:bg-white/10 w-full text-left"
                    onClick={() => handleNavigate("/profile")}
                  >
                    <HiUser size={18} />
                    <span className="text-sm">{t("profile")}</span>
                  </button>

                  <button
                    className="flex flex-row items-center gap-3 text-white hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-white/10 w-full text-left"
                    onClick={() => handleNavigate("/upload-form")}
                  >
                    <BiSolidBookAdd size={18} />
                    <span className="text-sm">{t("uploadForm")}</span>
                  </button>

                  <button
                    className="flex flex-row items-center gap-3 text-white hover:text-red-300 transition-colors p-2 rounded-lg hover:bg-white/10 w-full text-left"
                    onClick={handleSignOut}
                  >
                    <PiSignOutBold size={18} />
                    <span className="text-sm">{t("logout")}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <LoginButton isMobile={isMobile} />
        </>
      )}
    </>
  );
};
