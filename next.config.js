/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Enable source maps in development
    if (dev && !isServer) {
      config.devtool = 'source-map'
    }
    return config
  },
  // Remove automatic preloading of lucide-react
  experimental: {
    optimizePackageImports: ['lucide-react'],
    modularizeImports: {
      'lucide-react': {
        transform: 'lucide-react/dist/esm/icons/{{member}}'
      }
    }
  }
}

module.exports = nextConfig