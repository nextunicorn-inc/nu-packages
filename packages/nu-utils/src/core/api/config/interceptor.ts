import { GQLErrorResponse, GQLErrorType } from '../../../@types';
import ErrorHandler from './ErrorHandler';
import { AxiosResponse } from 'axios';
import generateGQLErrorMessage from '../../error/generateGQLErrorMessage';
import sendSentryMessage from './sendSentryMessage';

const isGQLErrorType = <T>(error: GQLErrorResponse | AxiosResponse<T>): error is GQLErrorType => {
  return error instanceof GQLErrorType;
};

const interceptor = <T>(response: GQLErrorResponse | AxiosResponse<T>): never => {
  if (isGQLErrorType(response)) {
    const { errorType, serviceName, clientMessage, code } = response?.errors?.[0]?.extensions;
    const message = response?.errors?.[0]?.message;
    const errorMessage = generateGQLErrorMessage({ message, code, serviceName, clientMessage });
    sendSentryMessage(errorMessage);

    return ErrorHandler({ status: errorType, message: errorMessage });
  }
  const { status, statusText } = response;
  sendSentryMessage(statusText);
  return ErrorHandler({ status });
};

export default interceptor;
