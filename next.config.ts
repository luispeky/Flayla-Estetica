import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Evita falha de build por incompatibilidade de versao do eslint-config-next
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
