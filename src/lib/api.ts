import { HeroData, AboutData, SkillsData, ProjectData } from '@/types';
import { logger } from './logger';

const handleResponse = async <T>(response: Response): Promise<T> => {
  try {
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    logger.error('API Response Error:', error);
    throw error;
  }
};

const api = {
  async getHeroData(): Promise<HeroData> {
    try {
      const response = await fetch('/api/profile/hero');
      return handleResponse<HeroData>(response);
    } catch (error) {
      logger.error('Failed to fetch hero data:', error);
      throw error;
    }
  },

  async getAboutData(): Promise<AboutData> {
    try {
      const response = await fetch('/api/profile/about');
      return handleResponse<AboutData>(response);
    } catch (error) {
      logger.error('Failed to fetch about data:', error);
      throw error;
    }
  },

  async getSkillsData(): Promise<SkillsData> {
    try {
      const response = await fetch('/api/profile/skills');
      return handleResponse<SkillsData>(response);
    } catch (error) {
      logger.error('Failed to fetch skills data:', error);
      throw error;
    }
  },

  async getProjectsData(): Promise<ProjectData[]> {
    try {
      const response = await fetch('/api/profile/projects');
      return handleResponse<ProjectData[]>(response);
    } catch (error) {
      logger.error('Failed to fetch projects data:', error);
      throw error;
    }
  }
};

export default api; 