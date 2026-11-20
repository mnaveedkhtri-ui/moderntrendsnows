/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'm.media-amazon.com', 'images.pexels.com'],
  },
};

module.exports = nextConfig;
