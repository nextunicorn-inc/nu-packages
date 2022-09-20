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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 3C16.7761 3 17 3.22386 17 3.5V5H20C21.0544 5 21.9182 5.81588 21.9945 6.85074L22 7V18C22 19.0544 21.1841 19.9182 20.1493 19.9945L20 20H4C2.94564 20 2.08183 19.1841 2.00549 18.1493L2 18V7C2 5.94564 2.81588 5.08183 3.85074 5.00549L4 5H7V3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5V5H16V3.5C16 3.22386 16.2239 3 16.5 3ZM21 10H3V18C3 18.5128 3.38604 18.9355 3.88338 18.9933L4 19H20C20.5128 19 20.9355 18.614 20.9933 18.1166L21 18V10ZM4 6H7V7.5C7 7.77614 7.22386 8 7.5 8C7.77614 8 8 7.77614 8 7.5V6H16V7.5C16 7.77614 16.2239 8 16.5 8C16.7761 8 17 7.77614 17 7.5V6H20L20.1166 6.00673C20.614 6.06449 21 6.48716 21 7V9H3V7L3.00673 6.88338C3.06449 6.38604 3.48716 6 4 6Z"
          fill={color}
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 3.5C6 3.22386 6.22386 3 6.5 3C6.77614 3 7 3.22386 7 3.5V4H13V3.5C13 3.22386 13.2239 3 13.5 3C13.7761 3 14 3.22386 14 3.5V4H16C17.1046 4 18 4.97683 18 6.18182V7V8V13.8182C18 15.0232 17.1046 16 16 16H4C2.89543 16 2 15.0232 2 13.8182V8V7V6.18182C2 4.97683 2.89543 4 4 4H6V3.5ZM13 5V5.5C13 5.77614 13.2239 6 13.5 6C13.7761 6 14 5.77614 14 5.5V5H16L16.1166 5.00748C16.614 5.07166 17 5.54129 17 6.11111V7H3V6.11111L3.00673 5.98153C3.06449 5.42893 3.48716 5 4 5H6V5.5C6 5.77614 6.22386 6 6.5 6C6.77614 6 7 5.77614 7 5.5V5H13ZM3 8V13.8889C3 14.4587 3.38604 14.9283 3.88338 14.9925L4 15H16C16.5128 15 16.9355 14.5711 16.9933 14.0185L17 13.8889V8H3Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'calendar');
export default IconComponent;
