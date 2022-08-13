import { UserRole } from '@nextunicorn/types';
import { UserRoleType } from '../@types/user';

const hasTargetRole = (userRoles: UserRoleType[], targetRole: UserRole) =>
  !!userRoles.find((companyRole) => companyRole.roles.find((userRole) => userRole === targetRole));

export default hasTargetRole;
