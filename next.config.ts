import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  // Environment variables that should be exposed to the browser
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },

  // Public runtime configuration
  publicRuntimeConfig: {
    SERVER_URL: process.env.SERVER_URL,
  },

  // Server-side runtime configuration
  serverRuntimeConfig: {
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    API_KEY: process.env.API_KEY,
  },

  // Webpack configuration to handle environment variables
  webpack: (config, { dev: _dev, isServer: _isServer }) => {
    // Custom webpack configuration if needed
    return config;
  },
};

export default nextConfig;
