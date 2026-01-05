import React from 'react';
import ErrorBoundary from './ErrorBoundary';

interface WithErrorBoundaryProps {
  fallback?: React.ReactNode;
}

export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { fallback }: WithErrorBoundaryProps = {}
) {
  return function WithErrorBoundaryWrapper(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
} 