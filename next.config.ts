/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["luxnewdesign.vercel.app"], // Add your Vercel domain
    formats: ["image/webp"], // Serve WebP images
  },
};

module.exports = nextConfig;
