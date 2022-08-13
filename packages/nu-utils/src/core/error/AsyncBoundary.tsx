import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import DefaultFallback from './DefaultFallback';
import { AsyncBoundaryProps } from '../../@types/error';

function AsyncBoundary({
  pendingFallback,
  rejectedFallback = ({ error, reset }) => <DefaultFallback error={error} reset={reset} />,
  children,
  ...errorBoundaryProps
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary renderFallback={rejectedFallback} {...errorBoundaryProps}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
