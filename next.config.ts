import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Near-Dear_web',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
