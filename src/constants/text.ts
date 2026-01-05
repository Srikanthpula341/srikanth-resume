export const TEXT = {
  ERROR: {
    TITLE: 'Something went wrong',
    GENERIC: 'An error occurred. Please try again.',
    API_GENERIC: 'Failed to fetch data',
    FETCH_PROFILE: 'Failed to load profile',
    LOAD_ABOUT: 'Failed to load about section',
    LOAD_SKILLS: 'Failed to load skills',
    TRY_AGAIN: 'Try Again'
  },
  HERO: {
    GREETING: "Hi, I'm",
    SOCIAL_BUTTONS: {
      GITHUB: 'View Projects',
      LINKEDIN: 'Connect on LinkedIn',
      CONTACT: 'Contact Me'
    }
  },
  NAVIGATION: {
    LOGO: 'SP',
    MENU_ITEMS: [
      { label: 'Home', id: 'home' },
      { label: 'About', id: 'about' },
      { label: 'Skills', id: 'skills' },
      { label: 'Projects', id: 'projects' }
    ]
  },
  ABOUT: {
    TITLE: 'About Me',
    STATS: {
      EXPERIENCE: 'Experience',
      COMPANIES: 'Companies',
      PROJECTS: 'Projects',
      DELIVERED: 'Delivered',
      EDUCATION: 'Education'
    },
    SECTIONS: {
      CORE_TECHNOLOGIES: 'Core Technologies',
      KEY_PROJECTS: 'Key Projects',
      VIEW_ALL: 'View All Projects',
      VIEW_DETAILS: 'View Details',
      CERTIFICATIONS: 'Certifications'
    }
  },
  SKILLS: {
    TITLE: 'Skills & Technologies',
    CATEGORIES: {
      LANGUAGES: 'Programming Languages',
      FRAMEWORKS: 'Frameworks & Libraries',
      DATABASES: 'Databases',
      CLOUD_DEVOPS: 'Cloud & DevOps',
      TOOLS: 'Tools & IDEs',
      SOFT_SKILLS: 'Soft Skills'
    }
  },
  PROJECTS: {
    TITLE: 'Projects & Contributions',
    ACTIONS: {
      VIEW_SOURCE: 'View Source',
      LIVE_DEMO: 'Live Demo'
    }
  },
  RESUME: {
    UPDATE: {
      TITLE: 'Update Resume',
      SUCCESS: 'Resume updated successfully!',
      ERROR: 'Failed to update resume',
      SECTIONS: {
        PERSONAL: 'Personal Information',
        CONTACT: 'Contact Information',
      },
      FIELDS: {
        NAME: 'Full Name',
        TITLE: 'Professional Title',
        SUMMARY: 'Professional Summary',
        EMAIL: 'Email Address',
        GITHUB: 'GitHub Profile URL',
        LINKEDIN: 'LinkedIn Profile URL',
      },
      ACTIONS: {
        SAVE: 'Save Changes',
      }
    }
  }
} as const;

// Type for accessing nested properties
export type TextKey = keyof typeof TEXT; 