/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ID: process.env.ID
  }
}

module.exports = nextConfig
