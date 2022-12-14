import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize20 {
  size?: '20';
}
type OverrideIconSize = OverrideIconSize20;

const SvgComponent = ({
  size = '20',
  color = '#F00001',
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
          d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.0995 6.99504C9.04623 6.46229 9.46459 6 10 6C10.5354 6 10.9538 6.46228 10.9005 6.99504L10.5498 10.5025C10.5215 10.7849 10.2838 11 10 11C9.71616 11 9.47849 10.7849 9.45025 10.5025L9.0995 6.99504ZM10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14Z"
          fill={color}
        />
      </svg>
    );
  }
  return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#F00001
 * 사용가능한 사이즈는 20 입니다.
 *
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'alert-filled');
export default IconComponent;
