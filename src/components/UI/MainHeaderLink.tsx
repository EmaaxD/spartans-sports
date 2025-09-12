import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { MainHeaderLinkProps } from "@src/interfaces";
import { uiContext } from "@src/context/ui";
import { useI18n } from "@src/hooks";

export const MainHeaderLink: React.FC<MainHeaderLinkProps> = ({
  icon: Icon,
  index,
  label,
  href,
  isMobile,
}) => {
  const [activate, setActivate] = useState<boolean>(false);

  const { pathname } = useRouter();

  const { t } = useI18n();

  const { handleToggleMenu } = useContext(uiContext);

  const handleClickLink = () => {
    if (isMobile) {
      handleToggleMenu();
    }
  };

  useEffect(() => {
    if (pathname === href && pathname !== "/") {
      setActivate(true);
    } else {
      setActivate(false);
    }
  }, [href, pathname]);

  return (
    <>
      <div data-aos="zoom-in" data-aos-delay={`${index + 1 * 2}00`}>
        <Link href={href ? href : "/"} onClick={handleClickLink}>
          <div
            className={`flex flex-row items-center gap-3 transition-colors ${
              activate ? "text-red-600 font-bold" : "text-white"
            }`}
          >
            <Icon size={20} />
            <span>{t(label)}</span>
          </div>
        </Link>
      </div>
    </>
  );
};
