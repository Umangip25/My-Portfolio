import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['drive.google.com', 'lh3.googleusercontent.com'],
  },
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
      {
        source: "/experience",
        destination: "/",
      },
      {
        source: "/projects",
        destination: "/",
      },
      {
        source: "/skills",
        destination: "/",
      },
      { source: "/education",
         destination: "/" 
      },
      {
        source: "/contact",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;