import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@vercel/analytics', '@vercel/speed-insights'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'drive.google.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'bvm6kdaf4jhy5dhu.public.blob.vercel-storage.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
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