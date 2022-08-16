export const USER_ROLE = {
  none: {
    member: 'none.member',
  },
  startup: {
    manager: 'startup.manager',
    subManager: 'startup.subManager',
  },
  investor: {
    member: 'investor.member',
  },
  am: {
    member: 'am.member',
  },
  nuPro: {
    member: 'nuPro.member',
  },
} as const;

export const USER_MAIN_ROLE = {
  startup: 'startup',
  investor: 'investor',
  am: 'am',
  nuPro: 'nuPro',
} as const;

export const USER_TYPE = {
  startup: 'ST',
  investor: 'IV',
  am: 'AM',
  nuPro: 'PRO',
  undecided: 'UD',
  unsigned: 'US', // 실제로 DB에 존재하는 타입은 아님
} as const;
