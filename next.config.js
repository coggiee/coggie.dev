/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["media.graphassets.com", "i.ibb.co"],
  },
};

module.exports = nextConfig;
