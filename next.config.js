/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.ts.io", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
