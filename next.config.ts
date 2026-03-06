import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'basket-16.wbcontent.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
