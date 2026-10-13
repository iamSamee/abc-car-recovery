import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve pages at URLs ending in "/" (e.g. /car-towing-birmingham/).
  trailingSlash: true,
  experimental: {
    // Put the (small) stylesheet in the HTML so first paint doesn't wait for a
    // separate CSS request.
    inlineCss: true,
  },
  images: {
    // AVIF is typically 20-50% smaller than WebP; browsers without it get WebP.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
