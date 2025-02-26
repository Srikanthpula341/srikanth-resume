import { CareerProfile } from '@/types';
import { CareerProfileData } from '@/types/career-data';
import careerProfile from '@/data/career_profile.json';
import type { SEOTestResults, MetaTagsResult } from '@/types/seo';

const convertCareerProfile = (data: CareerProfileData): CareerProfile => {
  return {
    contact: data.contact,
    career_summary: data.career_summary,
    skills: {
      programming_languages: [...(data.skills.backend || []), ...(data.skills.frontend || [])],
      frameworks: [...(data.skills.IDE || [])],
      databases: data.skills.database || [],
      cloud_devops: data.skills.testing || [],
      tools: data.skills.others || [],
      soft_skills: data.strengths || []
    },
    projects: [], // Add default empty array if not present
    experience: data.experience.map(exp => ({
      ...exp,
      summary: exp.summary || '', // Provide default empty string if summary is missing
    })),
    education: data.education,
    internships_trainings: [],
    certifications: [],
    honors_awards: [],
    interests: [],
    strengths: data.strengths || []
  };
};

export const generateSEOKeywords = () => {
  const profile = convertCareerProfile(careerProfile as CareerProfileData);
  const keywords = new Set<string>();

  // Name variations
  ['Srikanth', 'Pula', 'Srikanth Pula', 'SrikanthPula'].forEach(k => keywords.add(k));

  // Role variations
  ['Developer', 'Engineer', 'Full Stack', 'Software'].forEach(role => {
    keywords.add(`Srikanth Pula ${role}`);
    keywords.add(`${role} Srikanth Pula`);
  });

  // Skills based keywords
  profile.skills.programming_languages.forEach(skill => {
    keywords.add(`Srikanth Pula ${skill}`);
    keywords.add(`${skill} Developer Srikanth Pula`);
  });

  profile.skills.frameworks.forEach(skill => {
    keywords.add(`Srikanth Pula ${skill}`);
    keywords.add(`${skill} Developer Srikanth Pula`);
  });

  // Experience based keywords
  profile.experience.forEach(exp => {
    keywords.add(`${exp.position} Srikanth Pula`);
    keywords.add(`Srikanth Pula ${exp.company}`);
    exp.technologies.forEach(tech => {
      keywords.add(`Srikanth Pula ${tech}`);
      keywords.add(`${tech} Developer Srikanth Pula`);
    });
  });

  // Location based
  keywords.add('Srikanth Pula Hyderabad');
  keywords.add('Srikanth Pula India');
  keywords.add('Srikanth Pula Software Engineer Hyderabad');

  // Education based
  keywords.add(`Srikanth Pula ${profile.education.institution}`);
  keywords.add(`Srikanth Pula ${profile.education.degree}`);

  return Array.from(keywords);
};

export const generateMetaTags = (): SEOTestResults => {
  const profile = convertCareerProfile(careerProfile as CareerProfileData);

  const metaTags: MetaTagsResult = {
    description: profile.career_summary || null,
    keywords: generateSEOKeywords().join(', ') || null,
    author: profile.contact.email || null,
    ogTitle: profile.experience[0]?.position ? `${profile.experience[0].position} - Portfolio` : null,
    twitterCard: 'summary_large_image',
  };

  return {
    metaTags,
    structuredData: [{
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.contact.email.split('@')[0],
      jobTitle: profile.experience[0]?.position || '',
      // ... other structured data
    }],
    canonical: profile.contact.website,
    robots: 'index, follow',
    professional: profile.experience.map(exp => ({
      role: exp.position,
      company: exp.company,
      technologies: exp.technologies.join(', '),
      duration: exp.duration
    })),
    skills: {
      backend: profile.skills.programming_languages.join(', '),
      frontend: profile.skills.frameworks.join(', '),
      databases: profile.skills.databases.join(', '),
      tools: profile.skills.tools.join(', '),
      others: profile.skills.soft_skills.join(', ')
    },
    education: {
      institution: profile.education.institution,
      degree: profile.education.degree,
      year: profile.education.graduation_year
    }
  };
}; 