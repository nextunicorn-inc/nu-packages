import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize20 {
  size?: '20';
}
interface OverrideIconSize24 {
  size: '24';
}
type OverrideIconSize = OverrideIconSize20 | OverrideIconSize24;

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
        <path
          d="M3.5 3.5V15.5C3.5 16.0523 3.94772 16.5 4.5 16.5H16.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 14L7.39295 9.24194C7.73228 8.82721 8.33822 8.75366 8.76691 9.07518L11.169 10.8768C11.6228 11.2171 12.2684 11.1123 12.5912 10.646L16.5 5M16.5 5V9M16.5 5L12.5 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
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
          d="M3.5 18L8.39591 11.7688C8.73171 11.3415 9.3474 11.2605 9.78222 11.5867L12.2139 13.4104C12.6503 13.7377 13.2684 13.6549 13.6033 13.2244L20 5M20 5V9M20 5L16 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="3" y="3" width="1" height="18" rx="0.5" fill={color} />
        <rect
          x="21"
          y="20"
          width="1"
          height="18"
          rx="0.5"
          transform="rotate(90 21 20)"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'chart');
export default IconComponent;
