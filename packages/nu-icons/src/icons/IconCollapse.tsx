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
        <rect
          x="11.25"
          y="4.25"
          width="10.5"
          height="0.5"
          rx="0.25"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="3.25"
          y="11.25"
          width="18.5"
          height="0.5"
          rx="0.25"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="11.25"
          y="18.25"
          width="10.5"
          height="0.5"
          rx="0.25"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <path
          d="M7.5 7L3 11.5L7.5 16"
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
        <rect
          x="9.25"
          y="4.25"
          width="8.5"
          height="0.5"
          rx="0.25"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="2.25"
          y="9.25"
          width="15.5"
          height="0.5"
          rx="0.25"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <rect
          x="9.25"
          y="14.25"
          width="8.5"
          height="0.5"
          rx="0.25"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L3.20711 9.5L6.35355 12.6464C6.54882 12.8417 6.54882 13.1583 6.35355 13.3536C6.15829 13.5488 5.84171 13.5488 5.64645 13.3536L2.14645 9.85355C1.95118 9.65829 1.95118 9.34171 2.14645 9.14645L5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'collapse');
export default IconComponent;
