'use client';

import Heading from '@/components/atoms/Typography/Heading';
import Text from '@/components/atoms/Typography/Text';
import Button from '@/components/atoms/Button/Button';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/atoms/Icons';
import { TEXT } from '@/constants/text';
import type { HeroData } from '@/types';

interface HeroSectionProps {
  data: HeroData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data: { name, career_summary, contact } }) => {
  const socialLinks = [
    {
      href: contact.github,
      icon: GitHubIcon,
      label: TEXT.HERO.SOCIAL_BUTTONS.GITHUB,
      onClick: () => window.open(contact.github, '_blank')
    },
    {
      href: contact.linkedin,
      icon: LinkedInIcon,
      label: TEXT.HERO.SOCIAL_BUTTONS.LINKEDIN,
      onClick: () => window.open(contact.linkedin, '_blank')
    },
    {
      href: `mailto:${contact.email}`,
      icon: EmailIcon,
      label: TEXT.HERO.SOCIAL_BUTTONS.CONTACT,
      onClick: () => window.open(`mailto:${contact.email}`, '_blank')
    }
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-[20%] right-[20%] w-80 h-80 rounded-full bg-purple-600/30 blur-[100px]" />
      <div className="absolute bottom-[20%] left-[20%] w-80 h-80 rounded-full bg-blue-600/30 blur-[100px]" />
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <Heading level={1} className="mb-6 animate-fadeIn text-white">
          {TEXT.HERO.GREETING} {name}
        </Heading>
        <Text className="mb-8 text-lg text-gray-300 animate-fadeIn">
          {career_summary}
        </Text>
        <div className="flex flex-wrap justify-center gap-4 animate-fadeIn">
          {socialLinks.map(link => (
            <Button 
              key={link.label}
              variant={link.label === TEXT.HERO.SOCIAL_BUTTONS.GITHUB ? 'primary' : 'outline'} 
              size="lg"
              onClick={link.onClick}
            >
              <span className="flex items-center gap-2">
                <link.icon className="w-5 h-5" />
                {link.label}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 