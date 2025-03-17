import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  // Add any other config options you need
};

export default nextConfig;
