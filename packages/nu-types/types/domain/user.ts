import { USER_MAIN_ROLE, USER_TYPE } from '../../constants';

export type UserRole =
  | 'none.member'
  | 'startup.manager'
  | 'startup.subManager'
  | 'investor.member'
  | 'nuPro.member'
  | 'am.member'
  | 'unsigned';

export type UserType = typeof USER_TYPE[keyof typeof USER_TYPE];
export type UserMainRole = typeof USER_MAIN_ROLE[keyof typeof USER_MAIN_ROLE];
