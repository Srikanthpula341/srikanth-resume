export interface CareerProfileData {
  name: string;
  contact: {
    email: string;
    phone: string;
    website: string;
    github: string;
    linkedin: string;
  };
  career_summary: string;
  skills: {
    backend: string[];
    frontend: string[];
    database: string[];
    testing: string[];
    IDE: string[];
    others: string[];
  };
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    location: string;
    technologies: string[];
    projects: Array<{
      name: string;
      description: string[];
      technologies?: string[];
    }>;
    summary?: string;
  }>;
  education: {
    institution: string;
    degree: string;
    graduation_year: string;
    location: string;
    cgpa: string;
  };
  strengths: string[];
} 