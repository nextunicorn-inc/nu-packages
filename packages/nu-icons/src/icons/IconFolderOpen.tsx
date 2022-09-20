import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize24 {
  size: '24';
}
interface OverrideIconSize20 {
  size?: '20';
}
type OverrideIconSize = OverrideIconSize24 | OverrideIconSize20;

const SvgComponent = ({
  size = '20',
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '24') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.55714 11.5L6.30664 10.0427C6.478 9.70945 6.82124 9.5 7.19592 9.5H18.9286M18.9286 9.5H20.2456C20.8879 9.5 21.3636 10.0967 21.2205 10.7228L19.6205 17.7228C19.5166 18.1775 19.1121 18.5 18.6456 18.5H4.5C3.94771 18.5 3.5 18.0523 3.5 17.5V6.5C3.5 5.94772 3.94772 5.5 4.5 5.5H9.17988C9.48987 5.5 9.78233 5.64376 9.97167 5.8892L10.914 7.1108C11.1034 7.35624 11.3958 7.5 11.7058 7.5H17.9286C18.4809 7.5 18.9286 7.94772 18.9286 8.5V9.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (size === '20') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.1 9.61538L5.6199 8.61557C5.79202 8.28458 6.13406 8.07692 6.50712 8.07692H15.5M15.5 8.07692H16.2425C16.8857 8.07692 17.3617 8.6754 17.2168 9.3021L16.0791 14.2252C15.9742 14.6788 15.5703 15 15.1048 15H4.5C3.94772 15 3.5 14.5523 3.5 14V5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H7.81938C8.12316 4.5 8.41047 4.63809 8.60024 4.8753L9.19976 5.62469C9.38953 5.86191 9.67684 6 9.98062 6H14.5C15.0523 6 15.5 6.44772 15.5 7V8.07692Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#616161
 * 사용가능한 사이즈는 20, 24 입니다.
 *
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'folder-open');
export default IconComponent;
