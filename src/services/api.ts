import { HeroData, AboutData, SkillsData, ProjectData } from '@/types';
import config from '@/config';
import { ROUTES } from '@/constants';

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Failed to fetch data');
  }
  return response.json();
};

export const api = {
  async getHeroData(): Promise<HeroData> {
    const response = await fetch(`${config.api.baseUrl}${ROUTES.API.HERO}`);
    return handleResponse<HeroData>(response);
  },

  async getAboutData(): Promise<AboutData> {
    const response = await fetch(`${config.api.baseUrl}${ROUTES.API.ABOUT}`);
    return handleResponse<AboutData>(response);
  },

  async getSkillsData(): Promise<SkillsData> {
    const response = await fetch(`${config.api.baseUrl}${ROUTES.API.SKILLS}`);
    return handleResponse<SkillsData>(response);
  },

  async getProjectsData(): Promise<ProjectData[]> {
    const response = await fetch(`${config.api.baseUrl}${ROUTES.API.PROJECTS}`);
    return handleResponse<ProjectData[]>(response);
  }
}; 