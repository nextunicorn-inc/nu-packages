export type ViewLogAttribute = {
  id?: number;
  user_id?: number;
  sessionId?: string;
  fingerprint?: string;
  path?: string;
  pathTemplate?: string;
  pathArg0?: string;
  pathArg1?: string;
  pathArg2?: string;
  ref?: string;
  scrollCount?: number;
  pathname?: string;
  category?: string;
  event?: string | boolean;
  moveCount?: number;
  effectiveClickCount?: number;
  startAt?: Date | string | never;
  endAt?: Date | string | never;
  downTime?: number;
  moderatedUpTime?: number;
  upTime?: number;
  createdAt?: Date | string | never;
  collectedAt?: number | never;
  value?: number;
  strValues?: unknown[];
};

export type UTMAttribute = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export type UnicornEventAttribute = {
  category?: string;
  event?: string;
  value?: number;
  values?: number[];
  strValues?: string[];
  pathname?: string;
  contentId?: string | number;
  description?: string;
  ampProperties?: Record<string, unknown>;
  search?: UTMAttribute;
};

export type AmplitudeLogAttribute = {
  pushAllowed?: boolean;
  totalBookmarkedCompanyCount?: number;
  totalHeartedHrPostingCount?: number;
  signupYear?: Date | number | never;
  signupMonth?: Date | number | never;
  signupWeek?: Date | number | never;
  signupDay?: Date | number | never;
  lastLoginDate?: Date | number | never;
  totalViewedCompanyProfile?: number;
  totalIRRequested?: number;
  totalMeetingRequested?: number;
  totalIRFeedback?: number;
  totalViewedContents?: number;
  totalEnrollNotification?: number;
  totalViewedSupportPrograms?: number;
  totalAppliedSupportPrograms?: number;
  hasTaxId?: boolean;
};
