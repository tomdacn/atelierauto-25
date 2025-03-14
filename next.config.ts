/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "ext.same-assets.com",
      "web-assets.same.dev",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web-assets.same.dev",
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
