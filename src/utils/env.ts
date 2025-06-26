/**
 * Environment configuration utility
 * This file provides a centralized way to access environment variables
 */

// Custom type for our supported environments
type CustomNodeEnv = 'development' | 'production' | 'test' | 'staging';

export const env = {
  // Server configuration
  SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000',

  // Database configuration
  DATABASE_URL: process.env.DATABASE_URL || '',

  // Authentication
  AUTH_SECRET: process.env.AUTH_SECRET || '',

  // API configuration
  API_KEY: process.env.API_KEY || '',

  // Environment info
  NODE_ENV: (process.env.NODE_ENV as CustomNodeEnv) || 'development',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_STAGING: (process.env.NODE_ENV as CustomNodeEnv) === 'staging',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',

  // Debug settings
  DEBUG: process.env.DEBUG === 'true',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
} as const;

// Type for environment variables
export type Environment = typeof env;

// Helper function to validate required environment variables
export function validateEnv() {
  const required = ['SERVER_URL'];
  const missing: string[] = [];

  for (const key of required) {
    if (!env[key as keyof typeof env]) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
}

export default env;
