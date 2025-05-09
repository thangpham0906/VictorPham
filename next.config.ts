import type { NextConfig } from "next";
const isProd = true; // process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["placehold.co"],
  },
  output: 'export', // Để dùng `next export`
  basePath: isProd ? '/VictorPham' : '',
  assetPrefix: isProd ? '/VictorPham/' : '',
};

export default nextConfig;
