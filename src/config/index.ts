import { ROUTES, API_TIMEOUT, LOADING, IMAGES } from '@/constants';
import { logger } from '@/lib/logger';

export interface Config {
  readonly api: {
    readonly baseUrl: string;
    readonly endpoints: typeof ROUTES.API;
    readonly timeout: {
      readonly delay: typeof API_TIMEOUT.DELAY;
    };
  };
  readonly social: {
    readonly github: string;
    readonly linkedin: string;
    readonly email: string;
  };
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly images: {
    readonly placeholders: typeof IMAGES.PLACEHOLDERS;
  };
  readonly loading: {
    readonly progressInterval: typeof LOADING.INTERVAL;
    readonly maxProgress: typeof LOADING.MAX_PROGRESS;
    readonly increment: typeof LOADING.INCREMENT;
  };
}

const development: Config = {
  api: {
    baseUrl: 'http://localhost:3000',
    endpoints: ROUTES.API,
    timeout: {
      delay: API_TIMEOUT.DELAY,
    },
  },
  social: {
    github: 'https://github.com/Srikanthpula341',
    linkedin: 'https://www.linkedin.com/in/srikanthpula/',
    email: 'mailto:Pulasrikanth1999@gmail.com',
  },
  seo: {
    title: 'Srikanth Pula | Portfolio',
    description: 'Full Stack Developer with expertise in React, Node.js, and Cloud Technologies',
  },
  images: {
    placeholders: IMAGES.PLACEHOLDERS,
  },
  loading: {
    progressInterval: LOADING.INTERVAL,
    maxProgress: LOADING.MAX_PROGRESS,
    increment: LOADING.INCREMENT,
  },
} as const;

const production: Config = {
  ...development,
  api: {
    ...development.api,
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? development.api.baseUrl,
  },
} as const;

let config: Config;

try {
  const env = process.env.NODE_ENV ?? 'development';
  config = env === 'production' ? production : development;
  logger.info(`Config loaded for environment: ${env}`);
} catch (error) {
  logger.error('Failed to initialize config, using development config', error);
  config = development;
}

export default config; 