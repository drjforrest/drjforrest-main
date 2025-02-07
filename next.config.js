/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['drjforrest.com'],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Handle client-side modules
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;