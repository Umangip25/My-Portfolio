import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@vercel/analytics'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'drive.google.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      { source: "/about",      destination: "/" },
      { source: "/experience", destination: "/" },
      { source: "/projects",   destination: "/" },
      { source: "/skills",     destination: "/" },
      { source: "/education",  destination: "/" },
      { source: "/contact",    destination: "/" },
    ];
  },
};

export default nextConfig;