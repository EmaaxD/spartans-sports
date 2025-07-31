import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const SyncLanguage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (i18n.language !== router.locale) {
      i18n.changeLanguage(router.locale);
    }
  }, [router.locale]);

  return null;
};
