'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-red-500">Something went wrong</h2>
            <p className="text-gray-400">{this.state.error?.message}</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 