import { useErrorHandler } from '@/hooks/useErrorHandler';
import { withErrorBoundary } from '@/components/ErrorBoundary/withErrorBoundary';

function Card() {
  const handleError = useErrorHandler();

  const handleClick = async () => {
    try {
      // Some async operation
    } catch (error) {
      handleError(error, 'Card click handler');
    }
  };

  return (
    <div onClick={handleClick}>
      {/* Card content */}
    </div>
  );
}

export default withErrorBoundary(Card); 