/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
