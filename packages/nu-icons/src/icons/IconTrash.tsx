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
        <path d="M3.5 6.5H20.5" stroke={color} strokeLinecap="round" />
        <path d="M12 10V16.5" stroke={color} strokeLinecap="round" />
        <path
          d="M5 6.5L5.93366 19.5712C5.97104 20.0946 6.40648 20.5 6.93112 20.5H17.0689C17.5935 20.5 18.029 20.0946 18.0663 19.5712L19 6.5"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          d="M8.5 6V4.5C8.5 3.94772 8.94772 3.5 9.5 3.5H14.5C15.0523 3.5 15.5 3.94772 15.5 4.5V6"
          stroke={color}
          strokeLinecap="round"
        />
        <path d="M15 10L14.5 16.5" stroke={color} strokeLinecap="round" />
        <path d="M9 10L9.5 16.5" stroke={color} strokeLinecap="round" />
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3C12.5523 3 13 3.44772 13 4V5H16.5C16.7761 5 17 5.22386 17 5.5C17 5.77614 16.7761 6 16.5 6H15.917L15.0764 16.083C15.0332 16.6013 14.6 17 14.0799 17H5.92013C5.40004 17 4.96678 16.6013 4.92359 16.083L4.083 6H3.5C3.22386 6 3 5.77614 3 5.5C3 5.22386 3.22386 5 3.5 5H7V4C7 3.44772 7.44772 3 8 3H12ZM14.913 6H5.086L5.92013 16H14.0799L14.913 6ZM10 8C10.2761 8 10.5 8.22386 10.5 8.5V13.5C10.5 13.7761 10.2761 14 10 14C9.72386 14 9.5 13.7761 9.5 13.5V8.5C9.5 8.22386 9.72386 8 10 8ZM12.5 8C12.7541 8 12.9601 8.20598 12.9601 8.46007L12.5382 13.5415C12.5166 13.8007 12.3 14 12.0399 14H12C11.7459 14 11.5399 13.794 11.5399 13.5399L11.9618 8.45848C11.9834 8.19933 12.2 8 12.4601 8H12.5ZM7.53993 8C7.79998 8 8.01661 8.19933 8.03821 8.45848L8.45848 13.5017C8.47958 13.7549 8.29142 13.9773 8.03821 13.9984L7.96007 14C7.70002 14 7.48339 13.8007 7.46179 13.5415L7.04152 8.49827C7.02042 8.24506 7.20858 8.02269 7.46179 8.00159L7.53993 8ZM12 4H8V5H12V4Z"
          fill={color}
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'trash');
export default IconComponent;
