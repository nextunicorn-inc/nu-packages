import { GQLError, GQLErrorExtensions } from '../../@types';

const generateGQLErrorMessage = ({
  message,
  code,
  serviceName,
  clientMessage,
}: Partial<GQLErrorExtensions & GQLError>) => {
  return [message, code, serviceName, clientMessage].join(':');
};
export default generateGQLErrorMessage;
