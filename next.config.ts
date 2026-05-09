import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/xgym",
  assetPrefix: "/xgym",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
