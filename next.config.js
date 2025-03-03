/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Remove source maps in development for better performance
    if (dev && !isServer) {
      config.devtool = false
    }
    return config
  },
  // Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
}

module.exports = nextConfig