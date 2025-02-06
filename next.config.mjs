/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  webpack: (config, { dev, isServer }) => {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Optional: Add source maps in development
    if (dev && !isServer) {
      config.devtool = 'eval-source-map';
    }

    return config;
  }
}

export default nextConfig;