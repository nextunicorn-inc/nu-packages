// FIXME: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
export const ERROR_STATUS = {
  CODE: {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    CONFLICT: 409,
    GONE: 410,
    PRECONDITION_FAILED: 412,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    UNKNOWN_ERROR: 520,
  },
  NAME: {
    UNAUTHORIZED: 'Unauthorized', // 401
    FORBIDDEN: 'Forbidden', // 403
    NOT_FOUND: 'Not Found', // 404
    NOT_ACCEPTABLE: 'Not Acceptable', // 406
    PROXY_AUTHENTICATION_REQUIRED: 'Proxy Authentication Required', // 407
    CONFLICT: 'Conflict', // 409
    GONE: 'Gone', // 410
    PRECONDITION_FAILED: 'Precondition Failed', // 412
    REQUESTED_RANGE_NOT_SATISFIABLE: 'Requested Range Not Satisfiable', // 416
    UNAVAILABLE_FOR_LEGAL_REASONS: 'Unavailable For Legal Reasons', // 451
    INTERNAL_SERVER_ERROR: 'Internal Server Error', // 500
    NOT_IMPLEMENTED: 'Not Implemented', // 501
    BAD_GATEWAY: 'Bad Gateway', // 502
    SERVICE_UNAVAILABLE: 'Service Unavailable', // 503
    GATEWAY_TIMEOUT: 'Gateway Timeout', // 504
    UNKNOWN_ERROR: 'Unknown Error', // 520
  },
} as const;
