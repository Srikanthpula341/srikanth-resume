export interface CareerProfile {
  name: string;
  contact: {
    email: string;
    phone: string;
    website?: string;
    github?: string;
    linkedin?: string;
  };
  career_summary: string;
  skills: {
    backend: string[];
    frontend: string[];
    database: string[];
    testing?: string[];
    IDE: string[];
    others: string[];
  };
  experience: {
    company: string;
    technologies: string[];
    position: string;
    duration: string;
    location: string;
    projects: {
      name: string;
      technologies?: string[];
      description: string | string[];
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