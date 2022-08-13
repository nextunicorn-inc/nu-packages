export const BREAK_POINT_KEY = {
  large: 'large',
  large1300: 'large1300',
  medium: 'medium',
  small: 'small',
} as const;

export const BREAK_POINT = {
  [BREAK_POINT_KEY.large1300]: 1300,
  [BREAK_POINT_KEY.medium]: 1023,
  [BREAK_POINT_KEY.small]: 767,
} as const;
