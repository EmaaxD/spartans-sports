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
      await signOut();

      push("/");
    } catch (error) {}
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
            <Link
              href="/profile"
              className={`flex flex-row items-center gap-3 transition-colors text-white hover:text-gray-300`}
              onClick={handleToggleMenu}
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

              <span className={`${isMobile ? "flex" : "hidden lg:flex"}`}>
                Mi cuenta
              </span>
            </Link>
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
