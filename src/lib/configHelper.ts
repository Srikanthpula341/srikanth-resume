import { logger } from './logger';
import type { Config } from '@/config';
import config from '@/config';

type ConfigValue = string | number | boolean | object | null | undefined;

export const getConfigValue = <T extends ConfigValue>(
  path: string,
  defaultValue: T,
  config: Record<string, ConfigValue>
): T => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value = path.split('.').reduce<any>((obj, key) => {
      return obj && typeof obj === 'object' ? obj[key] : undefined;
    }, config) ?? defaultValue;
    
    return value as T;
  } catch (error) {
    logger.error(`Failed to get config value for path: ${path}`, error);
    return defaultValue;
  }
};

export const getSafeConfig = (
  config: Partial<Config>,
  defaultConfig: Config
): Config => {
  try {
    const safeConfig: Config = {
      api: {
        baseUrl: config?.api?.baseUrl ?? defaultConfig.api.baseUrl,
        endpoints: config?.api?.endpoints ?? defaultConfig.api.endpoints,
        timeout: {
          delay: config?.api?.timeout?.delay ?? defaultConfig.api.timeout.delay,
        },
      },
      social: {
        github: config?.social?.github ?? defaultConfig.social.github,
        linkedin: config?.social?.linkedin ?? defaultConfig.social.linkedin,
        email: config?.social?.email ?? defaultConfig.social.email,
      },
      seo: {
        title: config?.seo?.title ?? defaultConfig.seo.title,
        description: config?.seo?.description ?? defaultConfig.seo.description,
      },
      images: {
        placeholders: config?.images?.placeholders ?? defaultConfig.images.placeholders,
      },
      loading: {
        progressInterval: config?.loading?.progressInterval ?? defaultConfig.loading.progressInterval,
        maxProgress: config?.loading?.maxProgress ?? defaultConfig.loading.maxProgress,
        increment: config?.loading?.increment ?? defaultConfig.loading.increment,
      },
    };

    return safeConfig;
  } catch (error) {
    logger.error('Failed to create safe config, using default config', error);
    return defaultConfig;
  }
};

export const getConfig = <T>(key: string, defaultValue: T, configObj = config): T => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value = key.split('.').reduce<any>((obj, key) => {
      return obj && typeof obj === 'object' ? obj[key] : undefined;
    }, configObj) ?? defaultValue;
    
    return value as T;
  } catch (error) {
    logger.error(`Failed to get config value for key: ${key}`, error);
    return defaultValue;
  }
}; 