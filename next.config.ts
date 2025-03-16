import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // This is needed for App Router i18n
    // typedRoutes: true,
  },
};

export default nextConfig;
