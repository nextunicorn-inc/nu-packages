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
          d="M4 9.5H19.5M19.5 9.5V17.5C19.5 18.0523 19.0523 18.5 18.5 18.5H5C4.44772 18.5 4 18.0523 4 17.5V6.5C4 5.94772 4.44772 5.5 5 5.5H9.5C9.81476 5.5 10.1111 5.64819 10.3 5.9L11.2 7.1C11.3889 7.35181 11.6852 7.5 12 7.5H18.5C19.0523 7.5 19.5 7.94772 19.5 8.5V9.5Z"
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
          d="M3.5 8.38462H16.5M16.5 8.38462V14C16.5 14.5523 16.0523 15 15.5 15H4.5C3.94772 15 3.5 14.5523 3.5 14V5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H8.06581C8.36148 4.5 8.642 4.63085 8.832 4.85739L9.49058 5.64261C9.68058 5.86915 9.9611 6 10.2568 6H15.5C16.0523 6 16.5 6.44772 16.5 7V8.38462Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'folder');
export default IconComponent;
