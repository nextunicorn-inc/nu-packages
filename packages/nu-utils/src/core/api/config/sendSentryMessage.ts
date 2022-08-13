import * as Sentry from '@sentry/nextjs';

const sendSentryMessage = (message: string) => {
  const env = process.env.ENVIRONMENT as string;

  Sentry.withScope(function (scope) {
    scope.setTag('environment', env);
    scope.setTag('unHandled', 'error');
    scope.setLevel('warning');
    Sentry.captureMessage(message);
  });
};

export default sendSentryMessage;
