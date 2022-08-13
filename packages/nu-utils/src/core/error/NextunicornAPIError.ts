import { ApiError } from 'next/dist/server/api-utils';

export class NextunicornAPIError extends ApiError {
  redirectUrl = '';
  isNotFound = false;

  constructor(statusCode: number, message: string) {
    super(statusCode, message);
    this.redirectUrl = '/unknown';
  }
}

export class ServerError extends NextunicornAPIError {
  constructor(props?: string) {
    super(500, props ?? '');

    this.name = 'Server Error';
    this.redirectUrl = '/500';
  }
}

export class NotFoundError extends NextunicornAPIError {
  constructor(props?: string) {
    super(404, props ?? '');

    this.name = 'NotFoundError';
    this.isNotFound = true;
  }
}

export class UnavailableError extends NextunicornAPIError {
  constructor(props?: string) {
    super(503, props ?? '');

    this.name = 'Unavailable';
    this.redirectUrl = '/503';
  }
}

export class UnknownError extends NextunicornAPIError {
  constructor(props?: string) {
    super(520, props ?? '');

    this.name = 'Unknown';
    this.redirectUrl = '/520';
  }
}

export class ForbiddenError extends NextunicornAPIError {
  constructor(props?: string) {
    super(403, props ?? '');

    this.name = 'ForbiddenError';
    this.redirectUrl = '/403';
  }
}

export class AuthError extends NextunicornAPIError {
  constructor(props?: string) {
    super(401, props ?? '');
    this.name = 'AuthError';
    this.redirectUrl = '/401';
  }
}

export const isInstanceOfAPIError = (object: unknown): object is NextunicornAPIError =>
  object instanceof ApiError && ('redirectUrl' in object || 'notFound' in object);
