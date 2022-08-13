import { ReactNode, ReactElement } from 'react';

export type RenderFallbackParams = {
  error: unknown;
  reset?: (...args: unknown[]) => void;
};

export type ErrorBoundaryProps = {
  renderFallback?: (params: RenderFallbackParams) => ReactNode;
  reset?: (...args: unknown[]) => void;
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error: unknown;
};

export interface AsyncBoundaryProps extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  children: ReactNode;
  pendingFallback: ReactElement | null;
  rejectedFallback?: ErrorBoundaryProps['renderFallback'];
}

export type GQLErrorExtensions = {
  errorType: string;
  code?: string;
  serviceName?: string;
  clientMessage?: string;
};

export type GQLError = {
  message: string;
  extensions: GQLErrorExtensions;
};

export interface GQLErrorResponse {
  errors: GQLError[];
}

export class GQLErrorType implements GQLErrorResponse {
  constructor(errors: GQLError[]) {
    this.errors = errors;
  }
  errors: GQLError[];
}
