'use client';

import { useState, useEffect } from 'react';
import { staticData } from '@/data/staticData';
import type { HeroData, AboutData, SkillsData, ProjectData } from '@/types';

// Generic hook factory to simulate data loading
function createDataHook<T>(data: T) {
  return function useData() {
    const [loading, setLoading] = useState(true);
    // Remove error state since we're not using it with static data
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      // Simulate loading delay
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }, []);

    return { data, loading, error: null }; // Return null for error since we're using static data
  };
}

export const useHeroData = createDataHook<HeroData>(staticData.hero);
export const useAboutData = createDataHook<AboutData>(staticData.about);
export const useSkillsData = createDataHook<SkillsData>(staticData.skills);
export const useProjectsData = createDataHook<ProjectData[]>(staticData.projects); 