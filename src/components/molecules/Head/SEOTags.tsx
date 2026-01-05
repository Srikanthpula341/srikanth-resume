import { Fragment } from 'react';
import type { SEOTestResults } from '@/types/seo';

interface SEOTagsProps {
  metaTags: SEOTestResults;
}

export const ProfessionalTags = ({ metaTags }: SEOTagsProps) => (
  <>
    {metaTags.professional?.map((exp, index) => (
      <Fragment key={index}>
        <meta name={`professional:role:${index}`} content={exp.role} />
        <meta name={`professional:company:${index}`} content={exp.company} />
        <meta name={`professional:technologies:${index}`} content={exp.technologies} />
        <meta name={`professional:duration:${index}`} content={exp.duration} />
      </Fragment>
    ))}
  </>
);

export const SkillsTags = ({ metaTags }: SEOTagsProps) => (
  <>
    <meta name="skills:backend" content={metaTags.skills?.backend} />
    <meta name="skills:frontend" content={metaTags.skills?.frontend} />
    <meta name="skills:databases" content={metaTags.skills?.databases} />
    <meta name="skills:tools" content={metaTags.skills?.tools} />
    <meta name="skills:others" content={metaTags.skills?.others} />
  </>
);

export const EducationTags = ({ metaTags }: SEOTagsProps) => (
  <>
    <meta name="education:institution" content={metaTags.education?.institution} />
    <meta name="education:degree" content={metaTags.education?.degree} />
    <meta name="education:year" content={metaTags.education?.year?.toString()} />
  </>
); 