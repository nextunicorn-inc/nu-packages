export const INVESTOR = '/investment';
export const AM_USER = '/application-manager';
export const UNICORNBOX = '/unicornbox';
export const MY_PAGE = '/my-page';
export const EVENTS = '/events';
export const LOGIN_MAIN = '/login';

export const USER_EDIT_TAB_NAMES = {
  modify: 'modify',
  changePassword: 'change-password',
  withdrawal: 'withdrawal',
};

export const INVESTOR_USER_EDIT_TAB_NAMES = {
  modify: 'modify',
  interest: 'interest',
  changePassword: 'change-password',
  withdrawal: 'withdrawal',
};

export const STARTUP_USER_EDIT_TAB_NAMES = {
  modify: 'modify',
  changePassword: 'change-password',
  withdrawal: 'withdrawal',
};

export const INVESTOR_MAIN = `${INVESTOR}${MY_PAGE}${UNICORNBOX}/recommended-companies`;
export const AM_USER_MAIN = `${AM_USER}${MY_PAGE}${UNICORNBOX}/application-review/list/:eventId`;

export const ROUTER = {
  // Normal
  ONETIME_EVENT_191018_AWS: '/event/aws',
  ONETIME_EVENT_191028: '/event/ir-dream',
  ONETIME_EVENT_191122: '/event/ir-dream2',
  ONETIME_EVENT_191209: '/event/ir-template-dream',
  ONETIME_EVENT_191218: '/event/holiday-2019',
  ONETIME_EVENT_200102: '/event/2020-first',
  ONETIME_EVENT_200116: '/event/gv-pre-signup',
  ONETIME_EVENT_200204: '/event/ir-dream3',
  ONETIME_EVENT_200221: '/event/first100',
  ONETIME_EVENT_200406: '/event/referrer',
  ONETIME_EVENT_200707: '/event/kita-acvc',
  ONETIME_EVENT_200723_KR: '/event/tryeverything-kr',
  ONETIME_EVENT_200723_EN: '/event/tryeverything-en',
  ONETIME_EVENT_200730: '/event/welcometotips2020',
  ONETIME_EVENT_200811: '/event/welcometotips2020-daejeon',
  ONETIME_EVENT_200911: '/event/welcometotips2020-daegu',
  ONETIME_EVENT_200912: '/event/welcometotips2020-gwangju',
  ONETIME_EVENT_201023: '/event/unicorn-pr-launching',
  ONETIME_EVENT_201029: '/event/ai-yangjae-unicorn',
  ONETIME_EVENT_201112: '/event/startup-newsroom',
  ONETIME_EVENT_201208: '/event/goodbye-2020',
  ONETIME_EVENT_210316: '/event/chearup-startup',
  ONETIME_EVENT_210316_2: '/event/cheerup-startup',
  ONETIME_EVENT_210420: '/event/discovery-demoday',
  ONETIME_EVENT_210421: '/event/global-startup-school-season4',
  ONETIME_EVENT_210726: '/event/knock2021',
  EVENT_STARBUCKS: '/event/starbucks',
  EVENT_TOKTOK: '/event/toktok-unicorn',
  EVENT_TEMPLATE: '/event/:eventURI',
  UNICORNLIVE_EVENT_2022: '/unicornLive-event-2022',
  EVENT_2021_REPORT: '/event-2021report',
  EVENTS: `${EVENTS}`,
  INVESTOR_EVENTS: `${INVESTOR}${MY_PAGE}${UNICORNBOX}${EVENTS}`,

  // Main
  '/pre-registration': '/pre-registration',
  '/pre-registration-done': '/pre-registration-done',
  '/investor': '/investor',
  '/investment': '/investment',
  STARTUP_ORDER: '/order/:orderId',
  STARTUP_ORDER_DONE: '/order-done/:orderId',
  TICKET: '/ticket',
  STARTUP_MAIN: '/',

  // Support Programs
  SUPPORT_PROGRAM_FORM: '/support-program/:id/form',
  SUPPORT_PROGRAMS: '/support-programs',
  SUPPORT_PROGRAM_ID: '/support-program/:id',

  PROGRAMS: '/program',
  PROGRAM_ID: '/program/:id',
  PROGRAM_FORM: '/program/:id/form',

  // Newsroom
  NEWSROOM: '/newsroom',
  NEWSROOM_ID: '/newsroom/:pressReleaseId',

  // Online IR
  ONLINE_IR: '/online-ir',
  ONLINE_IR_ID: '/online-ir/:onlineIrKey',
  ONLINE_IR_PITCH_DECK: '/online-ir/:onlineIrKey/pitchdeck/:scheduleId',

  // UnicornLive
  UNICORN_LIVE: '/unicornlive',
  UNICORN_LIVE_ID: '/unicornlive/:unicornLiveKey',
  UNICORN_LIVE_PITCH_DECK: '/unicornlive/:unicornLiveKey/pitchdeck/:scheduleId',

  LOGIN: LOGIN_MAIN,
  INVESTOR_UNICORNBOX_RECEIVED_RELATIONS: `${INVESTOR}${MY_PAGE}${UNICORNBOX}/received-companies`,
  INVESTOR_UNICORNBOX_REQUESTED_RELATIONS: `${INVESTOR}${MY_PAGE}${UNICORNBOX}/requested-companies`,

  USER_BOOKMARK_COMPANIES_LIST: `${MY_PAGE}/bookmark-companies`,
  USER_BOOKMARK_HR_JOBS_LIST: `${MY_PAGE}/bookmark-hr-jobs`,

  // Company
  COMPANY: '/company/:companyId',

  // SignUp
  SIGNUP: '/signup',
  SIGNUP_USER_EMAIL: '/signup/user-email',
  SIGNUP_USER_SSO: '/signup/user-sso',
  SIGNUP_SELECT_ACCOUNT: '/signup/select-account',
  SIGNUP_EMAIL_SEND: '/signup/mail-send',
  SIGNUP_INVITED_USER_AUTHENTICATION: '/signup/invited-user-authentication',
  SIGNUP_EMAIL_EXPIRATION: '/signup/mail-expiration',
  SIGNUP_INVITATION_EMAIL_EXPIRATION: '/signup/invitation-mail-expiration',
  SIGNUP_SELECT_ROLE: '/signup/role-select',
  SIGNUP_HAS_TAX_ID: '/signup/tax-id-select',
  SIGNUP_COMPANY_AUTHENTICATION: '/signup/company-authentication',
  SIGNUP_REGISTER_MANAGER: '/signup/startup-manager-register',
  SIGNUP_PHONE_AUTHENTICATION: '/signup/manager-authentication',
  SIGNUP_STARTUP_AUTH_COMPLETE: '/signup/startup-manager/authentication-complete',
  SIGNUP_BUSINESS_CARD_REQUEST_KAKAO: '/signup/authentication-request/kakao',
  SIGNUP_BUSINESS_CARD_REQUEST_SMS: '/signup/authentication-request/message',
  SIGNUP_BUSINESS_CARD_EXPIRATION: '/signup/businesscard-upload-expiration',
  SIGNUP_UPLOAD_BUSINESS_CARD: '/signup/businesscard-upload',
  SIGNUP_BUSINESS_CARD_COMPLETE: '/signup/businesscard-upload-complete',

  // User Service Auth
  USER_SERVICE_AUTH: `${MY_PAGE}/service-authentication`,
  NO_ROLE_USER_SERVICE_AUTH: `/individual${MY_PAGE}/service-authentication`,
  INVESTOR_SERVICE_AUTH: `${INVESTOR}${MY_PAGE}${UNICORNBOX}/service-authentication`,

  // User Edit
  USER_EDIT: `${MY_PAGE}/user-edit/:tabName`,
  NO_ROLE_USER_EDIT: `/individual${MY_PAGE}/user-edit/:tabName`,
  INVESTOR_USER_EDIT: `${INVESTOR}/user-edit/:tabName`,

  // My Page
  MY_COMPANY_EDIT: `${MY_PAGE}/company/edit`,
  MY_COMPANY_MEMBERS: `${MY_PAGE}/company/members`,

  // Investor
  INVESTOR_SIGNUP: '/investor/signup',
  INVESTOR_SIGNUP_DONE: `${INVESTOR}/signup-done`,
  INVESTOR_SIGNUP_CERTIFY: '/investor/signup-certify',
  INVESTOR_UNSUBSCRIBE_BOOKMARKED_COMPANY: `${INVESTOR}/unsubscribe-bookmark-company`,

  // Investor Pages
  INVESTMENT_COMPANY: '/investment-company/:investorId',

  // Investor My Page
  INVESTOR_UNICORNBOX_RECOMMENDED_COMPANIES: INVESTOR_MAIN,
  INVESTOR_UNICORNBOX_ALL_RELATIONS: `${INVESTOR}${MY_PAGE}${UNICORNBOX}/all-companies`,
  INVESTOR_UNICORNBOX_BOOKMARK_RELATIONS: `${INVESTOR}${MY_PAGE}${UNICORNBOX}/bookmark-companies`,
  INVESTOR_APPLICATION_REVIEW_LIST: `${INVESTOR}${MY_PAGE}${UNICORNBOX}/application-review-list/list/:eventId`,
  INVESTOR_APPLICATION_REVIEW: `${INVESTOR}${MY_PAGE}${UNICORNBOX}/application-review/:applicationId`,
  INVESTOR_SHOWCASE: `${INVESTOR}/showcase`,

  INVESTOR_IR_PREVIEW: `${INVESTOR}/startup/:id/ir-preview`,
  INVESTOR_REVIEW_IR_PREVIEW: `${INVESTOR}/startup/review/ir-preview/:id/:applicationId`,

  UNICORN_LETTER: '/nus-letter',

  // Startup
  STARTUP_SIGNUP: '/startup/signup',
  STARTUP_EMAIL_DONE: '/verification-done',
  STARTUP_SIGNUP_ADDITIONAL_INFO: '/startup/signup/additional-info',
  COMPANY_SERVICE: '/company/:companyId/service/:serviceId',

  // Startup My Page
  STARTUP_INVESTMENT_REQUEST: `${MY_PAGE}/investor/request`,
  STARTUP_IR_INVESTMENT_REVIEW: `${MY_PAGE}/investor/investment-review`,
  STARTUP_IR_REQUEST_NOTIFICATION: `${MY_PAGE}/investor/ir-notification`,
  STARTUP_MEETING_REQUEST: `${MY_PAGE}/investor/meeting-request`,
  STARTUP_MY_COMPANY: `${MY_PAGE}/company`,
  STARTUP_MY_COMPANY_VALUE: `${MY_PAGE}/company-value`,
  STARTUP_MY_PAYMENT: `${MY_PAGE}/payment`,
  STARTUP_MY_TICKET: `${MY_PAGE}/ticket`,

  // Login
  FORGOT_PASSWORD: `${LOGIN_MAIN}/forgot-password`,
  FORGOT_PASSWORD_DONE: `${LOGIN_MAIN}/forgot-password-done`,
  RESET_PASSWORD: `${LOGIN_MAIN}/reset-password`,

  // Service introduction
  STARTUP_SERVICE_INTRODUCE: '/service-introduce',
  INVESTOR_SERVICE_INTRODUCE: `${INVESTOR}/service-introduce`,

  SERVICE_INTRODUCE_STARTUP: '/service/startup',
  SERVICE_INTRODUCE_INVESTOR: '/service/investor',
  SERVICE_INTRODUCE_UNICORNLIVE: '/service/unicornlive',

  // 유니콘HR 노코드 페이지
  JOB_POSTING: '/job-posting',

  // pr 배포하기 페이지
  PR_WRITING: '/pr-writing',

  // Other
  PRIVACY_POLICY: '/privacy-policy',
  PRIVACY_POLICY_VERSION: '/privacy-policy/:version',
  TERMS_OF_USE: '/terms-of-use',
  TERMS_OF_USE_VERSION: '/terms-of-use/:version',
  PRIVACY_AGREEMENT: '/privacy-agreement',
  PRIVACY_AGREEMENT_VERSION: '/privacy-agreement/:version',
  MARKETING_AGREEMENT: '/marketing-agreement',
  MARKETING_AGREEMENT_VERSION: '/marketing-agreement/:version',
  NOT_FOUND: '/not-found',
  NOT_AUTHORIZED: '/not-authorized',
  SERVER_ERROR: '/server-error',
  EXPLORER_ERROR: '/explorer-error',
  ALERT: '/_/alert',
  CHOICE: '/_/choice',
  SIGNUP_CERTIFY: '/signup-certify/:type',
  FIND_INVESTOR: '/investment-companies',
  FIND_STARTUP: '/companies',
  FIND_THEME_STARTUP: '/finder/theme/:themeId',
  PAST_THEME_STARTUP: '/theme/:themeId',
  SEARCH: '/search',
  FINDER: '/finder',

  // AmUser My Page
  AM_USER_MAIN,
  AM_APPLICATION_SUBMISSIONS: `${AM_USER}${MY_PAGE}/submissions`,
  AM_USER_APPLICATION_REVIEW_LIST: AM_USER_MAIN,
  AM_USER_APPLICATION_REVIEW: `${AM_USER}${MY_PAGE}${UNICORNBOX}/application-review/:applicationId`,
  AM_USER_REVIEW_IR_PREVIEW: `${AM_USER}/startup/review/ir-preview/:id/:applicationId`,

  EXPERIMENT: '/exp',
} as const;
