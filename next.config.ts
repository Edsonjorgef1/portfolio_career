import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['fs', 'path'],
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
