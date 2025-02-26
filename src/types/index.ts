export interface CareerProfile {
  contact: {
    email: string;
    phone: string;
    website: string;
    github: string;
    linkedin: string;
  };
  career_summary: string;
  skills: {
    programming_languages: string[];
    frameworks: string[];
    databases: string[];
    cloud_devops: string[];
    tools: string[];
    soft_skills: string[];
  };
  projects: {
    name: string;
    description: string;
    tech_stack: string[];
    github_url?: string;
    live_url?: string;
    image?: string;
  }[];
  experience: {
    company: string;
    position: string;
    duration: string;
    location: string;
    summary: string;
    technologies: string[];
    projects: {
      name: string;
      description: string[];
      technologies?: string[];
    }[];
  }[];
  education: {
    institution: string;
    degree: string;
    graduation_year: string;
    location: string;
    cgpa: string;
  };
  internships_trainings: string[];
  certifications: string[];
  honors_awards: string[];
  interests: string[];
  strengths: string[];
}

export interface HeroData {
  name: string;
  career_summary: string;
  contact: {
    email: string;
    phone: string;
    website: string;
    github: string;
    linkedin: string;
  };
}

export interface AboutData {
  experience: Array<{
    id: string;
    company: string;
    position: string;
    duration: string;
    location: string;
    summary: string;
    technologies: string[];
    projects: Array<{
      id: string;
      name: string;
      description: Array<{
        id: string;
        text: string;
      }>;
      technologies?: string[];
    }>;
  }>;
  education: {
    institution: string;
    degree: string;
    graduation_year: string;
    location: string;
    cgpa: string;
  };
  certifications: Array<{
    id: string;
    name: string;
  }>;
  strengths: string;
}

export interface SkillsData {
  programming_languages: string[];
  frameworks: string[];
  databases: string[];
  cloud_devops: string[];
  tools: string[];
  soft_skills: string[];
}

export interface ProjectData {
  name: string;
  description: string | string[];
  tech_stack: string[];
  company: string;
  duration: string;
  image: string;
  github_url?: string;
  live_url?: string;
}

export * from './seo';
export * from './career';
// ... export other types 