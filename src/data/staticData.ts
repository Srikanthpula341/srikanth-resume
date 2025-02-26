import careerProfile from './career_profile.json';
import { v4 as uuidv4 } from 'uuid';

export const staticData = {
  hero: {
    name: "Srikanth Pula",
    career_summary: careerProfile.career_summary,
    contact: careerProfile.contact,
  },
  about: {
    experience: careerProfile.experience.map(exp => ({
      id: uuidv4(),
      company: exp.company,
      position: exp.position,
      duration: exp.duration,
      location: exp.location,
      summary: '',
      technologies: exp.technologies,
      projects: exp.projects.map(proj => ({
        id: uuidv4(),
        name: proj.name,
        description: Array.isArray(proj.description) 
          ? proj.description.map(text => ({
              id: uuidv4(),
              text
            }))
          : [{ id: uuidv4(), text: proj.description }],
        technologies: proj.technologies
      }))
    })),
    education: careerProfile.education,
    certifications: careerProfile.certifications.map(cert => ({
      id: uuidv4(),
      name: cert
    })),
    strengths: Array.isArray(careerProfile.strengths) 
      ? careerProfile.strengths.join(' ') 
      : careerProfile.strengths,
  },
  skills: {
    programming_languages: [
      ...careerProfile.skills.backend,
      ...careerProfile.skills.frontend
    ],
    frameworks: careerProfile.skills.frontend,
    databases: careerProfile.skills.database,
    cloud_devops: careerProfile.skills.others,
    tools: careerProfile.skills.IDE,
    soft_skills: careerProfile.skills.others
  },
  projects: careerProfile.experience.flatMap(exp => 
    exp.projects.map(proj => ({
      name: proj.name,
      description: Array.isArray(proj.description) 
        ? proj.description.join(' ') 
        : proj.description,
      tech_stack: proj.technologies || exp.technologies,
      company: exp.company,
      duration: exp.duration,
      image: '/images/projects/placeholder.png',
      github_url: '#',
      live_url: '#'
    }))
  )
}; 