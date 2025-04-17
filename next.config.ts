/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com", 
      "gdscmitwpu.tech"
    ],
  },
};

module.exports = nextConfig;
