import { withErrorBoundary } from '@/components/organisms/ErrorBoundary/withErrorBoundary';
import { logger } from '@/lib/logger';

function Header() {
  logger.debug('Rendering Header component');

  return (
    <header>
      {/* Header content */}
    </header>
  );
}

export default withErrorBoundary(Header, {
  fallback: <div className="h-16 bg-gray-100">Header Error Fallback</div>
}); 