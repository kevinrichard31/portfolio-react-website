/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // output: 'standalone',
  // distDir: 'dist',
  // trailingSlash: true
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}

module.exports = nextConfig