'use client';

import { HeroData } from '@/types';
import Heading from '@/components/atoms/Typography/Heading';
import Text from '@/components/atoms/Typography/Text';
import Button from '@/components/atoms/Button/Button';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/atoms/Icons';

interface HeroSectionProps {
  data: HeroData;
}

const HeroSection = ({ data }: HeroSectionProps) => {
  if (!data) return null;

  const { name, career_summary, contact } = data;

  const socialLinks = [
    {
      href: contact.github,
      icon: GitHubIcon,
      label: 'GitHub',
      onClick: () => window.open(contact.github, '_blank')
    },
    {
      href: contact.linkedin,
      icon: LinkedInIcon,
      label: 'LinkedIn',
      onClick: () => window.open(contact.linkedin, '_blank')
    },
    {
      href: `mailto:${contact.email}`,
      icon: EmailIcon,
      label: 'Email',
      onClick: () => window.open(`mailto:${contact.email}`, '_blank')
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 bg-[#11071F] overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-[20%] right-[20%] w-80 h-80 rounded-full bg-purple-600/30 blur-[100px]" />
      <div className="absolute bottom-[20%] left-[20%] w-80 h-80 rounded-full bg-blue-600/30 blur-[100px]" />
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <Heading level={1} className="mb-6 animate-fadeIn text-white">
          Hi, I&apos;m {name}
        </Heading>
        <Text 
          variant="secondary" 
          size="lg" 
          className="mb-8 max-w-2xl mx-auto animate-fadeIn animation-delay-200 text-gray-300"
        >
          {career_summary}
        </Text>
        <div className="flex gap-4 justify-center animate-fadeIn animation-delay-400">
          {socialLinks.map((link) => (
            <Button 
              key={link.label}
              variant={link.label === 'GitHub' ? 'primary' : 'outline'} 
              size="lg"
              onClick={link.onClick}
            >
              <span className="flex items-center gap-2">
                <link.icon className="w-5 h-5" />
                {link.label === 'GitHub' ? 'View Projects' : 
                 link.label === 'LinkedIn' ? 'Connect on LinkedIn' : 
                 'Contact Me'}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 