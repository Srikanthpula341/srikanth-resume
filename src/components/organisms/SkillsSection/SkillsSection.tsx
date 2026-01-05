'use client';

import { SkillsData } from '@/types';
import Heading from '@/components/atoms/Typography/Heading';
import { logger } from '@/lib/logger';
import { SKILL_ICONS } from '@/constants/skillIcons';
import Image from 'next/image';

interface SkillsSectionProps {
  data: SkillsData;
}

const SkillsSection = ({ data }: Readonly<SkillsSectionProps>) => {
  try {
    if (!data) {
      logger.warn('SkillsSection: No data provided');
      return null;
    }

    const renderSkillWithIcon = (skill: string) => {
      const iconKey = Object.keys(SKILL_ICONS).find(
        key => key.toLowerCase() === skill.toLowerCase()
      );

      const hasIcon = iconKey && SKILL_ICONS[iconKey as keyof typeof SKILL_ICONS];

      return (
        <div 
          key={skill}
          className="flex flex-col items-center p-3 bg-purple-500/5 rounded-lg
            hover:bg-purple-500/10 transition-colors"
        >
          {hasIcon ? (
            <>
              <Image
                src={SKILL_ICONS[iconKey as keyof typeof SKILL_ICONS]}
                alt={skill}
                width={32}
                height={32}
                className="mb-2"
                loading="lazy"
                priority={false}
                quality={75}
                unoptimized={false}
              />
              <span className="text-sm text-gray-300 text-center">{skill}</span>
            </>
          ) : (
            <span className="text-sm text-gray-300">{skill}</span>
          )}
        </div>
      );
    };

    const skillCategories = {
      'Programming Languages': data.programming_languages ?? [],
      'Frameworks & Libraries': data.frameworks ?? [],
      'Databases': data.databases ?? [],
      'Cloud & DevOps': data.cloud_devops ?? [],
      'Tools & IDEs': data.tools ?? [],
      'Soft Skills': data.soft_skills ?? []
    };

    // Only show categories that have skills
    const nonEmptyCategories = Object.entries(skillCategories)
      .filter(([_category, skills]) => skills.length > 0); // eslint-disable-line @typescript-eslint/no-unused-vars

    if (nonEmptyCategories.length === 0) {
      logger.warn('SkillsSection: No skills data available');
      return null;
    }

    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        {/* Gradient Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
        
        <div className="relative z-10 max-w-6xl w-full">
          <Heading level={2} className="text-center mb-16 text-white">
            Skills & Technologies
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonEmptyCategories.map(([category, skills]) => (
              <div 
                key={category}
                className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {skills.map(skill => renderSkillWithIcon(skill))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    logger.error('Failed to render SkillsSection', error);
    return <div className="text-center p-4 text-red-400">Failed to load skills</div>;
  }
};

export default SkillsSection; 