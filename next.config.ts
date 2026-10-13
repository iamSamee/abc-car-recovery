import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve pages at URLs ending in "/" (e.g. /car-towing-birmingham/).
  trailingSlash: true,
  images: {
    // AVIF is typically 20-50% smaller than WebP; browsers without it get WebP.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
