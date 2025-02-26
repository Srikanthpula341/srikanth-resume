'use client';

import React from 'react';
import { AboutData } from '@/types';
import Heading from '@/components/atoms/Typography/Heading';
import { ExternalLinkIcon } from '@/components/atoms/Icons';
import { logger } from '@/lib/logger';

interface AboutSectionProps {
  data: AboutData;
}

const AboutSection = ({ data }: Readonly<AboutSectionProps>): React.ReactElement => {
  try {
    if (!data) {
      logger.warn('AboutSection: No data provided');
      return <></>;
    }

    const { experience, education, certifications, strengths } = data ?? {};

    const getTotalExperience = () => {
      try {
        const uniqueTechnologies = new Set(
          experience?.flatMap(exp => exp?.technologies ?? []) ?? []
        );
        const totalProjects = experience?.reduce(
          (acc, exp) => acc + (exp?.projects?.length ?? 0), 
          0
        ) ?? 0;

        return {
          technologies: Array.from(uniqueTechnologies),
          projectCount: totalProjects,
          companies: experience?.length ?? 0
        };
      } catch (error) {
        logger.error('Failed to calculate total experience', error);
        return {
          technologies: [],
          projectCount: 0,
          companies: 0
        };
      }
    };

    const summary = getTotalExperience();

    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">
        {/* Gradient Orb */}
        <div className="absolute top-1/3 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-purple-600/20 blur-[80px] md:blur-[120px]" />
        
        <div className="relative z-10 w-full max-w-[calc(100vw-2rem)] sm:max-w-4xl">
          <Heading level={2} className="text-center mb-8 md:mb-16 text-3xl md:text-4xl text-white">
            About Me
          </Heading>

          {/* Summary Section */}
          <div className="bg-background/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg border border-purple-500/20 
            hover:border-purple-500/40 transition-all duration-300 
            hover:shadow-[0_0_30px_-5px] hover:shadow-purple-500/20 group">
            <div className="text-center mb-6 md:mb-8">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed px-2">
                A passionate Full Stack Developer with {strengths}
              </p>
            </div>

            {/* Stats Grid - mobile responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="text-center p-3 md:p-4 bg-purple-500/5 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-500/10">
                <h4 className="text-purple-400 text-base md:text-lg font-medium mb-1 md:mb-2">Experience</h4>
                <p className="text-white text-xl md:text-2xl font-bold">{summary.companies} Companies</p>
              </div>
              <div className="text-center p-3 md:p-4 bg-purple-500/5 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-500/10">
                <h4 className="text-purple-400 text-base md:text-lg font-medium mb-1 md:mb-2">Projects</h4>
                <p className="text-white text-xl md:text-2xl font-bold">{summary.projectCount}+ Delivered</p>
              </div>
              <div className="text-center p-3 md:p-4 bg-purple-500/5 rounded-lg sm:col-span-2 md:col-span-1 transform transition-all duration-300 hover:scale-105 hover:bg-purple-500/10">
                <h4 className="text-purple-400 text-base md:text-lg font-medium mb-1 md:mb-2">Education</h4>
                <p className="text-white text-base md:text-lg font-medium">{education.degree}</p>
              </div>
            </div>

            {/* Core Technologies */}
            <div className="space-y-2">
              <h4 className="text-purple-400 text-base md:text-lg font-medium mb-3 md:mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {summary.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 md:px-3 py-1 bg-purple-500/10 text-purple-200 rounded-full text-xs md:text-sm
                      transition-all duration-300
                      hover:bg-purple-500/20 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6 md:space-y-8 mt-8">
            {experience.map((exp) => (
              <div 
                key={exp.id}
                className="bg-background/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-purple-500/20
                  hover:border-purple-500/40 transition-all duration-300 
                  hover:shadow-[0_0_30px_-5px] hover:shadow-purple-500/20 group"
              >
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl text-white font-medium group-hover:text-purple-300 transition-colors">
                    {exp.position}
                  </h3>
                  <p className="text-purple-300 text-sm md:text-base group-hover:text-purple-400 transition-colors">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">
                    {exp.duration} • {exp.location}
                  </p>
                  
                  {/* Company Summary */}
                  <div className="bg-purple-500/5 p-3 md:p-4 rounded-lg mb-3 md:mb-4
                    transform transition-all duration-300 group-hover:bg-purple-500/10">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {exp.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 md:py-1 bg-purple-500/10 text-purple-200 rounded-full text-xs
                            transition-all duration-300
                            hover:bg-purple-500/20 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Projects List */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base md:text-lg text-purple-400 font-medium">Key Projects</h4>
                    <button
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                    >
                      View All Projects <ExternalLinkIcon className="w-4 h-4" />
                    </button>
                  </div>
                  {exp.projects.map((project) => (
                    <div 
                      key={project.id}
                      className="bg-purple-500/5 p-3 md:p-4 rounded-lg 
                        transform transition-all duration-300
                        hover:bg-purple-500/10 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20
                        border border-transparent hover:border-purple-500/20
                        cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <h5 className="text-base md:text-lg text-purple-200 font-medium group-hover:text-purple-300 transition-colors">
                          {project.name}
                        </h5>
                        <span className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
                          View Details
                        </span>
                      </div>
                      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                        {project.description.map((desc) => (
                          <li 
                            key={desc.id} 
                            className="text-xs md:text-sm leading-relaxed pl-1"
                          >
                            {desc.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-6 md:mt-8 bg-background/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-purple-500/20
            hover:border-purple-500/40 transition-all duration-300 
            hover:shadow-[0_0_30px_-5px] hover:shadow-purple-500/20 group">
            <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-3 md:mb-4">Certifications</h3>
            <ul className="list-disc list-inside space-y-1.5 md:space-y-2">
              {certifications.map((cert) => (
                <li 
                  key={cert.id} 
                  className="text-sm md:text-base text-gray-300"
                >
                  {cert.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    logger.error('Failed to render AboutSection', error);
    return <div className="text-center p-4 text-red-400">Failed to load about section</div>;
  }
};

export default AboutSection; 