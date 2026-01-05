'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'base' | 'lg';
  className?: string;
}

const Text = ({ 
  children, 
  variant = 'primary',
  size = 'base',
  className 
}: TextProps): React.ReactElement => {
  const variants = {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-300'
  };

  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg'
  };

  return (
    <p className={cn(variants[variant], sizes[size], className)}>
      {children}
    </p>
  );
};

export default Text; 