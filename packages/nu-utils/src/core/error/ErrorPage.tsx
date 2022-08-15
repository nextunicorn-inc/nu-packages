import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  width: 100%;
`;

const MainError = styled.div`
  font-size: 40px;
  color: red;
  margin-bottom: 20px;
`;

const SubMessage = styled.div`
  font-size: 20px;
`;

const ErrorPoint = styled.div`
  font-size: 20px;
  color: blue;
  margin-bottom: 20px;
`;

const Button = styled.div`
  margin-top: 20px;
  background-color: #e8eaed;
  align-items: center;
  padding: 4px 8px;
  border-radius: 5px;
  white-space: pre;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const Error = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const STATIC_ERROR_PAGES = [401, 403, 500, 503, 520];

const ErrorPage = ({ error }: { error: any }) => {
  const { message, statusCode } = error;
  const router = useRouter();
  const APIError = (status: number | undefined): string => {
    switch (status) {
      case 500:
        return 'Internal Server Error!';
      case 404:
        return 'Cannot found';
      case 403:
        return 'Forbidden';
      case 401:
        return 'Not Authorize';
      // Todo
      case undefined:
        return 'Client Error';
      default:
        return 'Unknown Error';
    }
  };

  if (STATIC_ERROR_PAGES.indexOf(statusCode) > -1) {
    router.push(`/${statusCode}`);
  }

  const errorMessage = message.split(':');
  const serviceMS = errorMessage.shift();
  const errorCode = errorMessage.pop();
  const clientMessage = errorMessage.pop();
  const devMessage = errorMessage.join('');
  const env = process.env.ENVIRONMENT as string;
  const isDev = env === 'local' || env === 'beta';

  return (
    <Wrapper>
      <Error>
        <MainError>{isDev ? APIError(statusCode) : clientMessage}</MainError>
        {isDev ? (
          <>
            <ErrorPoint>{statusCode && `Error is occured in ${serviceMS} MS`}</ErrorPoint>
            <SubMessage>
              {errorCode}' '{devMessage}
            </SubMessage>
          </>
        ) : (
          <ErrorPoint>{clientMessage}</ErrorPoint>
        )}
        <Button onClick={() => router.reload()}>새로고침</Button>
      </Error>
    </Wrapper>
  );
};

export default ErrorPage;
