import { siteMetadata } from '@/config/metadata';

export const generateStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteMetadata.author,
    jobTitle: 'Full Stack Developer',
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    email: siteMetadata.email,
    sameAs: [
      siteMetadata.social.github,
      siteMetadata.social.linkedin,
      // Add other social profiles if available
    ],
    image: `${siteMetadata.siteUrl}/images/profile.jpg`, // Add your profile image
    worksFor: {
      '@type': 'Organization',
      name: 'Current Company Name',
      url: 'Company URL if available'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Lakireddy Bali Reddy College of Engineering',
      url: 'College URL'
    },
    knowsAbout: [
      'Full Stack Development',
      'Java',
      'Spring Boot',
      'NextJS',
      'Angular',
      'React',
      'TypeScript',
      'Node.js',
      'Web Development',
      'RESTful APIs',
      'Database Design',
      'Cloud Services'
    ],
    skills: [
      'Frontend Development',
      'Backend Development',
      'Database Management',
      'API Development',
      'Cloud Computing',
      'DevOps',
      'Agile Methodologies'
    ]
  };


  return structuredData;
}; 