import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // Desactivar strict mode para evitar doble renderizado
  i18n,
  images: {
    domains: [
      "spartans-sport-bucket.s3.sa-east-1.amazonaws.com",
      "lh3.googleusercontent.com",
    ], // Add your image domains here
  },
  // Configuración adicional para evitar problemas de hidratación
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
