// Environment type (development, production, staging)

type NodeEnv = 'development' | 'production' | 'test' | 'staging';
export const ENV: NodeEnv = (process.env.NODE_ENV as NodeEnv) || 'development';
// Application metadata
export const APP = {};

// API configuration
export const API = {
  URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
};

// Server configuration
export const SERVER = {
  PORT: parseInt(process.env.PORT || '3000', 10),
};

// Check if we're running in development mode
export const IS_DEV = ENV === 'development';

// Check if we're running in production mode
export const IS_PROD = ENV === 'production';

// Check if we're running in staging mode
export const IS_STAGING = ENV === 'staging';
