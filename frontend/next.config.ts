import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  transpilePackages: ['@lobehub/icons', '@lobehub/ui'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.milesweb.in',
        port: '',
        pathname: '/**', // Matches your specific image folder path structure
      },
    ],
  },
};

export default nextConfig;
