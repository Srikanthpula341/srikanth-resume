'use client';

import React, { useEffect, useState } from 'react';
import { LOADING } from '@/constants';

export default function LoadingBar(): React.ReactElement {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev: number) => {
        if (prev >= LOADING.MAX_PROGRESS) {
          clearInterval(timer);
          return LOADING.MAX_PROGRESS;
        }
        return prev + LOADING.INCREMENT;
      });
    }, LOADING.INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-purple-900/20 z-50">
      <div 
        className="h-full bg-purple-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
} 