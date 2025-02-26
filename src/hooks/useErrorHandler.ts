import { useCallback } from 'react';
import { logger } from '@/lib/logger';

export function useErrorHandler() {
  return useCallback((error: unknown, context?: string) => {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger.error(`Error in ${context || 'unknown context'}: ${errorMessage}`, error);
    
    // You can add additional error handling logic here
    // Such as showing a toast notification or updating error state
  }, []);
} 