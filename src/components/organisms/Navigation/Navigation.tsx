'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">SP</div>
        
        <ul className="flex items-center gap-8">
          {[
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'Skills', id: 'skills' },
            { label: 'Projects', id: 'projects' }
          ].map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation; 