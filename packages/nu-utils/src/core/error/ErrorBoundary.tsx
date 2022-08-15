import { Component, ErrorInfo } from 'react';
import ErrorPage from './ErrorPage';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../@types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  public static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  resetErrorBoundary = () => {
    const { reset } = this.props;
    this.setState({ error: null, hasError: false });
    if (reset) {
      reset();
    }
  };

  public render() {
    const { resetErrorBoundary } = this;
    const { hasError, error } = this.state;
    const { children, renderFallback } = this.props;

    if (hasError && error) {
      if (renderFallback) {
        return renderFallback({
          error,
          reset: resetErrorBoundary,
        });
      }
      return <ErrorPage error={error} />;
    }

    return children;
  }
}

export default ErrorBoundary;
