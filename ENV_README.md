# Environment Configuration

This project uses multiple environment files to handle different deployment environments.

## Environment Files

- `.env` - Base environment variables (default/fallback values)
- `.env.development` - Development environment variables
- `.env.staging` - Staging environment variables
- `.env.production` - Production environment variables
- `.env.example` - Template showing required environment variables

## How It Works

Next.js automatically loads environment variables based on the `NODE_ENV`:

1. **Development** (`NODE_ENV=development`):
   - Loads `.env.development` then `.env`

2. **Staging** (`NODE_ENV=staging`):
   - Loads `.env.staging` then `.env`

3. **Production** (`NODE_ENV=production`):
   - Loads `.env.production` then `.env`

## Environment Variables

### Required Variables

- `SERVER_URL` - The base URL of your server/application

### Optional Variables

- `DATABASE_URL` - Database connection string
- `AUTH_SECRET` - Secret key for authentication
- `API_KEY` - API key for external services
- `DEBUG` - Enable/disable debug mode
- `LOG_LEVEL` - Logging level (debug, info, warn, error)

## Setup

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Fill in your actual values in `.env`

3. Customize environment-specific files as needed

## Usage in Code

### Client-side (Browser)

Environment variables are exposed through `next.config.ts`:

```typescript
// Accessible in browser
const serverUrl = process.env.SERVER_URL;
```

### Server-side

Use the utility helper:

```typescript
import { env } from '@/utils/env';

// Server-side only
const dbUrl = env.DATABASE_URL;
const apiKey = env.API_KEY;
```

## Deployment

### Development

```bash
npm run dev
# Uses .env.development
```

### Staging

```bash
NODE_ENV=staging npm run build
NODE_ENV=staging npm start
# Uses .env.staging
```

### Production

```bash
NODE_ENV=production npm run build
NODE_ENV=production npm start
# Uses .env.production
```

## Security Notes

- Never commit actual `.env` files with real secrets
- Use environment-specific files (`.env.development`, etc.) for non-sensitive config
- Real secrets should be set via your hosting platform's environment variables
- The `.env.example` file should only contain example values, not real secrets
