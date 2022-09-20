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
          d="M4 6.5C4 5.67157 4.67157 5 5.5 5H10C10.4721 5 10.9167 5.22229 11.2 5.6L12.1 6.8C12.1944 6.9259 12.3426 7 12.5 7H19C19.8284 7 20.5 7.67157 20.5 8.5V9H4V6.5ZM4 10V17.5C4 18.3284 4.67157 19 5.5 19H19C19.8284 19 20.5 18.3284 20.5 17.5V10H4Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'folder-defaultFill');
export default IconComponent;
