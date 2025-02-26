import { generateMetaTags } from '@/lib/seoHelper';
import { BasicMetaTags, OpenGraphTags, TwitterTags } from '@/components/Head/MetaTags';
import { FaviconLinks, PerformanceLinks } from '@/components/Head/LinkTags';
import { SecurityTags } from '@/components/Head/SecurityTags';
import { ProfessionalTags, SkillsTags, EducationTags } from '@/components/Head/SEOTags';

export default function DocumentHead() {
  const metaTags = generateMetaTags();

  return (
    <>
      <BasicMetaTags />
      <OpenGraphTags />
      <TwitterTags />
      <FaviconLinks />
      <SecurityTags />
      <PerformanceLinks />
      <ProfessionalTags metaTags={metaTags} />
      <SkillsTags metaTags={metaTags} />
      <EducationTags metaTags={metaTags} />
    </>
  );
} 