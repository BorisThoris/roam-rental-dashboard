const path = require('path');


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set by the hosted-failover build so the static export works under a sub-path
  // (basePath) without touching the normal .next output (distDir). Unset = default.
  ...(process.env.HOSTED_BASE_PATH ? { basePath: process.env.HOSTED_BASE_PATH } : {}),
  ...(process.env.HOSTED_DIST_DIR ? { distDir: process.env.HOSTED_DIST_DIR } : {}),
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
}

module.exports = nextConfig
