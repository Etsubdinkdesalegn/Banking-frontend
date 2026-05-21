import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Avoid errors with external assets if any
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
