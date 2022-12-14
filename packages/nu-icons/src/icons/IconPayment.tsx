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
          d="M20 5H4C2.89543 5 2 5.89543 2 7V8V10V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V10V8V7C22 5.89543 21.1046 5 20 5ZM21 8V7C21 6.44772 20.5523 6 20 6H4C3.44772 6 3 6.44772 3 7V8H21ZM3 10V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V10H3ZM4.5 16C4.22386 16 4 16.2239 4 16.5C4 16.7761 4.22386 17 4.5 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H4.5ZM16.5 14C15.6716 14 15 14.6716 15 15.5C15 16.3284 15.6716 17 16.5 17C16.8842 17 17.2346 16.8556 17.5 16.6181C17.7654 16.8556 18.1158 17 18.5 17C19.3284 17 20 16.3284 20 15.5C20 14.6716 19.3284 14 18.5 14C18.1158 14 17.7654 14.1444 17.5 14.3819C17.2346 14.1444 16.8842 14 16.5 14ZM17 15.5C17 15.2239 16.7761 15 16.5 15C16.2239 15 16 15.2239 16 15.5C16 15.7761 16.2239 16 16.5 16C16.7761 16 17 15.7761 17 15.5ZM18 15.5C18 15.7761 18.2239 16 18.5 16C18.7761 16 19 15.7761 19 15.5C19 15.2239 18.7761 15 18.5 15C18.2239 15 18 15.2239 18 15.5Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'payment');
export default IconComponent;
