import {
  USER_TYPE,
  UserRole,
  UserType,
  UserMainRole,
  USER_MAIN_ROLE,
} from '@nextunicorn-inc/nu-types';

const hasMainRoleOf = (target: UserMainRole, candidates: UserRole[]): boolean =>
  candidates?.some((c) => c?.startsWith(target)) || false;

export const hasRoleOf = (target: UserRole, candidates: UserRole[]): boolean => {
  if (!candidates) return false;
  return candidates.some((c) => c === target);
};

export const hasRolesOf = (targets: UserRole[], candidates?: UserRole[]): boolean => {
  if (!candidates) return false;
  const matchedResults = targets.map((t) => candidates.some((c) => c === t));
  return matchedResults.filter((v) => v).length > 0;
};

export const getUserType = (roles: UserRole[]): UserType => {
  if (roles) {
    if (hasMainRoleOf(USER_MAIN_ROLE.startup, roles)) {
      return USER_TYPE.startup;
    }
    if (hasMainRoleOf(USER_MAIN_ROLE.investor, roles)) {
      return USER_TYPE.investor;
    }
    if (hasMainRoleOf(USER_MAIN_ROLE.am, roles)) {
      return USER_TYPE.am;
    }
    if (hasMainRoleOf(USER_MAIN_ROLE.nuPro, roles)) {
      return USER_TYPE.nuPro;
    }
  }
  if (roles === undefined) {
    return USER_TYPE.unsigned;
  }
  return USER_TYPE.undecided;
};
