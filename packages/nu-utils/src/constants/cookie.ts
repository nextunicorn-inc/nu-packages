export const MAX_AGE_LIMIT = 60 * 60 * 24 * 365;

export const IMMEDIATELY_INVALIDATE_COOKIE =
  '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=strict;' as const;
