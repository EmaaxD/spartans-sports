import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

import FlagEn from "@src/assets/img/flags/en.png";
import FlagEs from "@src/assets/img/flags/es.png";

const locales = [
  { code: "en", label: "English", flag: FlagEn.src },
  { code: "es", label: "Español", flag: FlagEs.src },
];

export const LanguageSelector = () => {
  const router = useRouter();
  const currentLocale = router.locale;

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;

    if (selectedLocale !== currentLocale) {
      await router.push(router.pathname, router.asPath, {
        locale: selectedLocale,
      });
    }
  };

  return (
    <div className="language-selector">
      <Image
        src={
          locales.find((locale) => locale.code === currentLocale)?.flag ||
          FlagEn.src
        }
        alt={`${currentLocale} flag`}
        width={24}
        height={24}
        className="inline-block mr-2"
      />

      <select
        name="lenguajes"
        value={currentLocale}
        onChange={handleChange}
        className="bg-transparent text-sm text-white outline-none"
      >
        {locales.map((locale) => (
          <option
            key={locale.code}
            value={locale.code}
            className="flex items-center gap-2 text-black"
          >
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
};
