export const API_TIMEOUT = {
  DELAY: 300,
} as const;

export const LOADING = {
  INTERVAL: 500,
  MAX_PROGRESS: 90,
  INCREMENT: 10,
} as const;

export const ROUTES = {
  API: {
    HERO: '/api/profile/hero',
    ABOUT: '/api/profile/about',
    SKILLS: '/api/profile/skills',
    PROJECTS: '/api/profile/projects',
  },
} as const;

export const IMAGES = {
  PLACEHOLDERS: {
    PROJECT: '/images/projects/placeholder.png',
  },
} as const;

// Literal types for consistent string values
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
} as const;

export const BUTTON_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type ButtonVariant = typeof BUTTON_VARIANTS[keyof typeof BUTTON_VARIANTS];
export type ButtonSize = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES]; 