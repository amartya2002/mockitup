/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/mockitup" : "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
};

module.exports = nextConfig;