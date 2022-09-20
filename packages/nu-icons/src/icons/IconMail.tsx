import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize20 {
  size?: '20';
}
type OverrideIconSize = OverrideIconSize20;

const SvgComponent = ({
  size = '20',
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '20') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2.5" y="4.5" width="15" height="11" rx="0.5" stroke={color} />
        <path
          d="M2.5 4.5L9.34507 10.4324C9.72093 10.7581 10.2791 10.7581 10.6549 10.4324L17.5 4.5"
          stroke={color}
        />
      </svg>
    );
  }
  return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#616161
 * 사용가능한 사이즈는 20 입니다.
 *
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'mail');
export default IconComponent;
