import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      "spartans-sport-bucket.s3.sa-east-1.amazonaws.com",
      "lh3.googleusercontent.com",
    ], // Add your image domains here
  },
};

export default nextConfig;
