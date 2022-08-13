type UserInfoType = {
  id: string;
  email: string;
  introduction: string;
  name: string;
  phone: string;
  title: string;
};

export type UserRoleType = {
  roles: UserRole[];
  companyId: string;
  company: {
    name: string;
  };
};

export type UserInfo = {
  user: UserInfoType;
  userRoles: UserRoleType[];
  hasNuProRole: boolean;
};

export type UserInfoGQL = {
  userMe: {
    user: UserInfoType;
    userRoles: UserRoleType[];
  };
};

export type UserRole =
  | 'none.member'
  | 'startup.manager'
  | 'startup.subManager'
  | 'investor.member'
  | 'nuPro.member'
  | 'am.member'
  | 'unsigned';
