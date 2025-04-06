import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // This is needed for App Router i18n
    // typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
