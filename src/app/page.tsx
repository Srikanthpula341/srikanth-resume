'use client';

import { useHeroData, useAboutData, useSkillsData, useProjectsData } from '@/hooks/useProfileData';
import HeroSection from '@/components/organisms/HeroSection/HeroSection';
import AboutSection from '@/components/organisms/AboutSection/AboutSection';
import SkillsSection from '@/components/organisms/SkillsSection/SkillsSection';
import ProjectsSection from '@/components/organisms/ProjectsSection/ProjectsSection';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';
import ErrorMessage from '@/components/atoms/ErrorMessage';
import Script from 'next/script';
import { generateStructuredData } from './structured-data';

export default function Home() {
  const hero = useHeroData();
  const about = useAboutData();
  const skills = useSkillsData();
  const projects = useProjectsData();

  // Show loading state if any section is loading
  if (hero.loading || about.loading || skills.loading || projects.loading) {
    return <LoadingSpinner />;
  }

  // Show first error encountered
  const error = hero.error || about.error || skills.error || projects.error;
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden">
        <ErrorMessage message={error} />
      </div>
    );
  }

  // Show nothing if any data is missing
  if (!hero.data || !about.data || !skills.data || !projects.data) {
    return null;
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <main className="bg-background overflow-x-hidden">
        <section id="home">
          <HeroSection data={hero.data} />
        </section>
        
        <section id="about">
          <AboutSection data={about.data} />
        </section>
        
        <section id="skills">
          <SkillsSection data={skills.data} />
        </section>
        
        <section id="projects">
          <ProjectsSection data={projects.data} />
        </section>
      </main>
    </>
  );
}
