// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { i18n as nextI18NextConfig } from "./../../next-i18next.config";

i18n
  .use(HttpBackend) // para cargar traducciones desde /public/locales
  .use(LanguageDetector) // detecta idioma automáticamente
  .use(initReactI18next) // conecta con React
  .init({
    ...nextI18NextConfig,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    load: "languageOnly", // <-- esta línea
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    ns: ["common"],
    defaultNS: "common",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
    detection: {
      order: ["path", "cookie", "navigator"],
      caches: ["cookie"], // ← Guarda el idioma elegido en cookies
    },
  });

export default i18n;
