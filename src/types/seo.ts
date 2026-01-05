export interface MetaTagsResult {
  description: string | null;
  keywords: string | null;
  author: string | null;
  ogTitle: string | null;
  twitterCard: string | null;
}

export interface ProfessionalExperience {
  role: string;
  company: string;
  technologies: string;
  duration: string;
}

export interface SkillsMetadata {
  backend: string;
  frontend: string;
  databases: string;
  tools: string;
  others: string;
}

export interface EducationMetadata {
  institution: string;
  degree: string;
  year: number | string;
}

export interface StructuredDataResult {
  '@context': string;
  '@type': string;
  name: string;
  description?: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  worksFor?: {
    '@type': string;
    name: string;
  };
  alumniOf?: {
    '@type': string;
    name: string;
  };
  knowsAbout?: string[];
  sameAs?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface SEOTestResults {
  metaTags: MetaTagsResult | null;
  structuredData: StructuredDataResult[] | null;
  canonical: string | null;
  robots: string | null;
  professional: ProfessionalExperience[];
  skills: SkillsMetadata;
  education: EducationMetadata;
} 