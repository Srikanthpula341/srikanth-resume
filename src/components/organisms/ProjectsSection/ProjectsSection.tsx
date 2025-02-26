'use client';

import React from 'react';
import { ProjectData } from '@/types';
import Heading from '@/components/atoms/Typography/Heading';
import Text from '@/components/atoms/Typography/Text';
import Image from 'next/image';
import { IMAGES } from '@/constants';
import { ExternalLinkIcon } from '@/components/atoms/Icons';

interface ProjectsSectionProps {
  data: ProjectData[];
}

const ProjectsSection = ({ data }: Readonly<ProjectsSectionProps>): React.ReactElement => {
  if (!data) return <></>;

  const renderDescription = (description: string | string[]) => {
    const descriptions = Array.isArray(description) 
      ? description 
      : [description];

    return (
      <div className="space-y-3 text-gray-300">
        {descriptions.map((desc, idx) => (
          <p key={idx} 
            className="text-sm leading-relaxed
              transition-all duration-300 ease-out
              group-hover:text-purple-200"
          >
            • {desc}
          </p>
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient Orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      
      <div className="relative z-10 max-w-6xl w-full">
        <Heading level={2} className="text-center mb-16 text-white">
          Projects & Contributions
        </Heading>

        <div className="space-y-32">
          {data.map((project, index) => (
            <div 
              key={index}
              id={`project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center scroll-mt-32`}
            >
              {/* Project Info */}
              <div className="flex-1 space-y-4 group">
                <div className="space-y-1">
                  <Text variant="secondary" className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {project.company}
                  </Text>
                  <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400">{project.duration}</p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 
                  group-hover:border-purple-500/40 transition-all duration-300 
                  group-hover:shadow-[0_0_30px_-5px] group-hover:shadow-purple-500/20">
                  {renderDescription(project.description)}
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, idx) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-purple-500/10 text-purple-200 rounded-full text-sm
                          opacity-0 transform -translate-y-2
                          transition-all duration-300 ease-out
                          group-hover:opacity-100 group-hover:translate-y-0"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.github_url && (
                      <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        View Source <ExternalLinkIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.live_url && (
                      <a 
                        href={project.live_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Live Demo <ExternalLinkIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className="flex-1 relative h-[300px] w-full group/image">
                <div className="absolute inset-0 bg-purple-500/10 rounded-lg overflow-hidden 
                  transition-all duration-500 ease-out
                  group-hover/image:bg-transparent">
                  <Image
                    src={IMAGES.PLACEHOLDERS.PROJECT}
                    alt={`${project.name} preview`}
                    fill
                    priority={index < 2}
                    className="object-cover rounded-lg 
                      transition-all duration-500 ease-out
                      group-hover/image:scale-105 group-hover/image:rotate-1"
                  />
                  {/* Overlay with project info on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent 
                    opacity-0 transition-opacity duration-300
                    group-hover/image:opacity-100">
                    <div className="absolute bottom-0 left-0 p-6 space-y-2">
                      <h4 className="text-white font-semibold">{project.name}</h4>
                      <p className="text-purple-200 text-sm">{project.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 