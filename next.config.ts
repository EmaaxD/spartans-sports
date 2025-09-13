import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // Desactivar strict mode para evitar doble renderizado
  i18n,
  
  // Configuración para evitar problemas de hidratación
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  images: {
    domains: [
      "spartans-sport-bucket.s3.sa-east-1.amazonaws.com",
      "lh3.googleusercontent.com",
    ],
  },
  
  // Configuración adicional para evitar problemas de hidratación
  webpack: (config, { dev, isServer }) => {
    // Configuraciones específicas para cliente
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        buffer: false,
        util: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;
