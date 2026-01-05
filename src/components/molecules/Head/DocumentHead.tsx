import { generateMetaTags } from '@/lib/seoHelper';
import { BasicMetaTags, OpenGraphTags, TwitterTags } from '@/components/molecules/Head/MetaTags';
import { FaviconLinks, PerformanceLinks } from '@/components/molecules/Head/LinkTags';
import { SecurityTags } from '@/components/molecules/Head/SecurityTags';
import { ProfessionalTags, SkillsTags, EducationTags } from '@/components/molecules/Head/SEOTags';

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