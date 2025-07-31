import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

import FlagEn from "@src/assets/img/flags/en.png";
import FlagEs from "@src/assets/img/flags/es.png";

const locales = [
  { code: "en", label: "English", flag: FlagEn.src },
  { code: "es", label: "Español", flag: FlagEs.src },
];

export const LanguageSelector = () => {
  const router = useRouter();
  const currentLocale = router.locale;
  const [selectedLang, setSelectedLang] = useState(currentLocale);

  const { i18n } = useTranslation();

  useEffect(() => {
    setSelectedLang(currentLocale);
  }, [currentLocale]);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;

    if (selectedLocale !== currentLocale) {
      await router.replace(router.pathname, router.asPath, {
        locale: selectedLocale,
        scroll: false,
      });

      // 🔥 fuerza cambio en react-i18next
      await i18n.changeLanguage(selectedLocale);
    }
  };

  return (
    <div className="language-selector flex items-center">
      <Image
        src={
          locales.find((locale) => locale.code === selectedLang)?.flag ||
          FlagEn.src
        }
        alt={`${selectedLang} flag`}
        width={24}
        height={24}
        className="inline-block mr-2"
      />

      <select
        name="lenguajes"
        value={selectedLang}
        onChange={handleChange}
        className="bg-transparent text-sm text-white outline-none"
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code} className="text-black">
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
};
