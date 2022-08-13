import { UserInfo } from '../../@types/user';
import { hasTargetRole } from '../../utils';
import type { UserRole } from '@nextunicorn/types';

const canAccessPage = (accessibleRoles: UserRole[], userMe?: UserInfo) => {
  if (!accessibleRoles.length) return true;
  // if (!userMe) return false;
  // if (!userMe.userRoles) return false;

  const { userRoles } = userMe ?? ({ userRoles: [{ roles: ['unsigned'] }] } as UserInfo);
  return accessibleRoles.find((role) => hasTargetRole(userRoles, role));
};

export default canAccessPage;
