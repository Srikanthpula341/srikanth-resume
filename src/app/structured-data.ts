import { siteMetadata } from '@/config/metadata';

export const generateStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Srikanth Pula',
  jobTitle: 'Full Stack Developer',
  url: siteMetadata.siteUrl,
  sameAs: [
    siteMetadata.social.github,
    siteMetadata.social.linkedin,
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Current Company Name'
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Lakireddy Bali Reddy College of Engineering'
  },
  knowsAbout: [
    'Full Stack Development',
    'Java',
    'Spring Boot',
    'NextJS',
    'Angular',
    'Web Development'
  ]
}); 