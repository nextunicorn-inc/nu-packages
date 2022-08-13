import { ERROR_CODE, ERROR_STATE } from './ErrorState';
import {
  AuthError,
  ForbiddenError,
  NextunicornAPIError,
  NotFoundError,
  ServerError,
  UnavailableError,
} from '../../error';

const ErrorHandler = ({ status, message = '' }: { status: string | number; message?: string }) => {
  switch (status) {
    case ERROR_STATE.INTERNAL || ERROR_CODE.INTERNAL:
      throw new ServerError(message);
    case ERROR_STATE.NOT_FOUND || ERROR_CODE.NOT_FOUND:
      throw new NotFoundError(message);
    case ERROR_STATE.PERMISSION_DENIED || ERROR_CODE.PERMISSION_DENIED:
      throw new ForbiddenError(message);
    case ERROR_STATE.UNAUTHENTICATED || ERROR_CODE.UNAUTHENTICATED:
      throw new AuthError(message);
    case ERROR_STATE.UNAVAILABLE || ERROR_CODE.UNAVAILABLE:
      throw new UnavailableError(message);
    default:
      throw new NextunicornAPIError(520, message);
  }
};

export default ErrorHandler;
