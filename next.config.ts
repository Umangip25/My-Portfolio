import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
      {
        source: '/experience',
        destination: '/',
      },
      {
        source: '/projects',
        destination: '/',
      },
      {
        source: '/skills',
        destination: '/',
      },
      {
        source: '/contact',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;