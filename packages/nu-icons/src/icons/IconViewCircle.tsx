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
          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12ZM14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12ZM5.12862 11.4771C5.7945 10.1949 7.86737 7 12 7C16.1335 7 18.2064 10.1949 18.8714 11.4771C19.0429 11.8075 19.0429 12.1923 18.8714 12.5227C18.2064 13.8049 16.1335 16.9998 12 16.9998C7.86737 16.9998 5.7945 13.8049 5.12862 12.5227C4.95712 12.1923 4.95712 11.8075 5.12862 11.4771ZM17.973 11.8978C17.361 10.7255 15.5542 8 11.9997 8C8.44517 8 6.63835 10.7255 6.02636 11.8978C5.99121 11.9656 5.99121 12.0344 6.02636 12.1022C6.63835 13.2745 8.44517 16 11.9997 16C15.5542 16 17.361 13.2745 17.973 12.1022C18.009 12.0344 18.009 11.9656 17.973 11.8978Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'view-circle');
export default IconComponent;
