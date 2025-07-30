import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { PiSignOutBold } from "react-icons/pi";
import { HiUser } from "react-icons/hi2";
import { MdFormatListBulleted } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";

import { UserLoginProps } from "@src/interfaces";

import { uiContext } from "@src/context/ui";

import { LoginButton } from "../UI";

export const UserLogin: React.FC<UserLoginProps> = ({ isMobile = false }) => {
  const { data: session, status } = useSession();

  const [avatarSrc, setAvatarSrc] = useState<string>("");

  const { handleToggleMenu } = useContext(uiContext);

  const { push } = useRouter();

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
                      className={`flex flex-row items-center gap-3 transition-colors text-white hover:text-gray-300`}
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
                        Mi cuenta
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
                        className="bg-white/90 w-fit flex flex-col px-4 py-2 rounded-lg z-50 gap-1.5 mt-2"
                      >
                        <MenuItem>
                          <Link href="/profile">
                            <div className="flex flex-row items-center gap-2 data-[focus]:bg-blue-100">
                              <HiUser className="text-gray-600" />
                              <span>Mi perfil</span>
                            </div>
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="/ebooks/obtained">
                            <div className="flex flex-row items-center gap-2 data-[focus]:bg-blue-100">
                              <MdFormatListBulleted className="text-gray-600" />
                              <span>Mis ebooks</span>
                            </div>
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="/upload-ebook">
                            <div className="flex flex-row items-center gap-2 data-[focus]:bg-blue-100">
                              <BiSolidBookAdd className="text-gray-600" />
                              <span>Subir Ebook</span>
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
                            <span>Salir</span>
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
