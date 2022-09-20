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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.147 8.9249C2.908 7.51442 5.277 4 10 4C14.724 4 17.093 7.51442 17.853 8.9249C18.049 9.28833 18.049 9.71167 17.853 10.0751C17.093 11.4856 14.724 15 10 15C5.277 15 2.908 11.4856 2.147 10.0751C1.951 9.71167 1.951 9.28833 2.147 8.9249ZM16.969 9.38459C16.255 8.06054 14.147 4.98223 9.99999 4.98223C5.85299 4.98223 3.74499 8.06054 3.03099 9.38459C2.98999 9.4612 2.98999 9.5388 3.03099 9.61541C3.74499 10.9395 5.85299 14.0178 9.99999 14.0178C14.147 14.0178 16.255 10.9395 16.969 9.61541C17.011 9.5388 17.011 9.4612 16.969 9.38459ZM8 9.5C8 8.39537 8.89537 7.5 10 7.5C11.1046 7.5 12 8.39537 12 9.5C12 10.6046 11.1046 11.5 10 11.5C8.89537 11.5 8 10.6046 8 9.5ZM10 6.5C8.34309 6.5 7 7.84309 7 9.5C7 11.1569 8.34309 12.5 10 12.5C11.6569 12.5 13 11.1569 13 9.5C13 7.84309 11.6569 6.5 10 6.5Z"
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
 * 사용가능한 사이즈는 20 입니다.
 *
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'eye');
export default IconComponent;
