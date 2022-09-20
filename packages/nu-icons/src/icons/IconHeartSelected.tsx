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
          d="M11.9975 21L10.035 19.3004L9.9722 19.2463C7.70185 17.2878 5.73575 15.5918 4.34528 13.9745C2.93159 12.3303 2 10.642 2 8.69094C2 7.16455 2.50126 5.74238 3.46789 4.68992C4.4443 3.62682 5.84348 3 7.5 3C9.59531 3 11.0469 4.24767 12.0091 5.27511C12.3641 4.90733 12.7741 4.51941 13.2338 4.17557C14.0834 3.53995 15.1716 3 16.5 3C18.1565 3 19.5557 3.62682 20.5321 4.68992C21.4987 5.74238 22 7.16455 22 8.69094C22 10.642 21.0684 12.3303 19.6549 13.9754C18.2693 15.5881 16.3116 17.2804 14.0509 19.2347L13.9636 19.3102L11.9975 21Z"
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
          d="M8.17495 16.4411C6.13165 14.7002 4.36217 13.1927 3.11075 11.7551C1.83843 10.2936 1 8.79287 1 7.05862C1 5.70182 1.45113 4.43767 2.3211 3.50215C3.19987 2.55718 4.45913 2 5.95 2C7.83578 2 9.14217 3.10904 10.0082 4.02232C10.3277 3.69541 10.6967 3.35059 11.1104 3.04495C11.875 2.47996 12.8545 2 14.05 2C15.5409 2 16.8001 2.55718 17.6789 3.50215C18.5489 4.43767 19 5.70182 19 7.05862C19 8.79286 18.1616 10.2936 16.8894 11.7559C15.6423 13.1894 13.8804 14.6937 11.8458 16.4309L11.7673 16.4979L9.99774 18L8.2315 16.4893L8.17498 16.4411L8.17495 16.4411Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'heart-selected');
export default IconComponent;
