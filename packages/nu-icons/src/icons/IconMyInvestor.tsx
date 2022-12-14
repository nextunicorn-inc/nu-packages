import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize24 {
  size: '24';
}
type OverrideIconSize = OverrideIconSize24;

const SvgComponent = ({
  size,
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
          d="M6 8C6 9.39847 6.71767 10.6293 7.8048 11.3444C4.45382 12.4165 2 15.843 2 19.5C2 19.7761 2.22386 20 2.5 20C2.77614 20 3 19.7761 3 19.5C3 15.634 6.13401 12 10 12C13.866 12 17 15.634 17 19.5C17 19.7761 17.2239 20 17.5 20C17.7761 20 18 19.7761 18 19.5C18 15.843 15.5462 12.4165 12.1952 11.3444C13.2823 10.6293 14 9.39847 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8ZM13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8ZM15.5 7.5C15.5 7.22386 15.7239 7 16 7H21.5C21.7761 7 22 7.22386 22 7.5C22 7.77614 21.7761 8 21.5 8H16C15.7239 8 15.5 7.77614 15.5 7.5ZM16 10C15.7239 10 15.5 10.2239 15.5 10.5C15.5 10.7761 15.7239 11 16 11H21.5C21.7761 11 22 10.7761 22 10.5C22 10.2239 21.7761 10 21.5 10H16ZM18.5 13C18.2239 13 18 13.2239 18 13.5C18 13.7761 18.2239 14 18.5 14H21.5C21.7761 14 22 13.7761 22 13.5C22 13.2239 21.7761 13 21.5 13H18.5Z"
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
 * 사용가능한 사이즈는 24 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'myInvestor');
export default IconComponent;
