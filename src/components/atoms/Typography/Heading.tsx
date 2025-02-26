'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ level = 1, children, className }: HeadingProps): React.ReactElement => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  const baseStyles = "font-bold text-gray-900 dark:text-white";
  const styles = {
    1: "text-4xl md:text-5xl mb-6",
    2: "text-3xl md:text-4xl mb-5",
    3: "text-2xl md:text-3xl mb-4",
    4: "text-xl md:text-2xl mb-3",
    5: "text-lg md:text-xl mb-2",
    6: "text-base md:text-lg mb-2"
  };

  return (
    <Tag className={cn(baseStyles, styles[level], className)}>
      {children}
    </Tag>
  );
};

export default Heading; 