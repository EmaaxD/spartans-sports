// hooks/useI18n.ts
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const useI18n = (namespace: string = "common") => {
  const { t, i18n } = useTranslation(namespace);
  const router = useRouter();

  const changeLanguage = async (lng: string) => {
    if (router.locale !== lng) {
      await router.push(router.pathname, router.asPath, { locale: lng });
    }
  };

  return {
    t,
    locale: i18n.language,
    changeLanguage,
  };
};
