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
          d="M12.8571 2C12.9684 2 13.0756 2.03705 13.1625 2.10403L13.2235 2.15977L17.8664 7.15977C17.9308 7.22914 17.9738 7.31484 17.9912 7.4066L18 7.5V12.5C18 12.7761 17.7761 13 17.5 13C17.2545 13 17.0504 12.8231 17.0081 12.5899L17 12.5V9H13.5C12.707 9 12.0739 8.35206 12.006 7.54414L12 7.4V3H6.35714C5.65981 3 5.07293 3.58786 5.0063 4.3543L5 4.5V18.5C5 18.9439 5.17504 19.3534 5.47181 19.6363C5.68257 19.8371 5.94106 19.9609 6.21754 19.9921L6.35714 20H8.5C8.77614 20 9 20.2239 9 20.5C9 20.7455 8.82312 20.9496 8.58988 20.9919L8.5 21H6.35714C5.76658 21 5.21032 20.7685 4.78189 20.3602C4.33189 19.9313 4.05388 19.3376 4.00705 18.6943L4 18.5V4.5C4 3.18214 4.96465 2.09057 6.20121 2.00535L6.35714 2H12.8571ZM14.5 12C14.7761 12 15 12.2239 15 12.5C15 12.7761 14.7761 13 14.5 13H7.5C7.22386 13 7 12.7761 7 12.5C7 12.2239 7.22386 12 7.5 12H14.5ZM11 9.5C11 9.22386 10.7761 9 10.5 9H7.5C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10H10.5C10.7761 10 11 9.77614 11 9.5ZM7 15.5C7 15.2239 7.22386 15 7.5 15H9.5C9.77614 15 10 15.2239 10 15.5C10 15.7761 9.77614 16 9.5 16H7.5C7.22386 16 7 15.7761 7 15.5ZM13 7.4V3.389L17 7.697V8H13.5L13.4216 7.99242C13.1904 7.94746 13 7.7073 13 7.4Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 17C14.6715 17 14 17.6715 14 18.5C14 19.3285 14.6715 20 15.5 20C16.3285 20 17 19.3285 17 18.5C17 17.6715 16.3285 17 15.5 17ZM13 18.5C13 17.1192 14.1192 16 15.5 16C16.8808 16 18 17.1192 18 18.5C18 19.8808 16.8808 21 15.5 21C14.1192 21 13 19.8808 13 18.5Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1666 17.9232C10.6821 17.0892 12.2956 15 15.5 15C18.7041 15 20.3181 17.0895 20.8332 17.9236C21.0558 18.283 21.0554 18.7176 20.8329 19.0768C20.3178 19.9106 18.7037 22 15.5 22C12.2954 22 10.6819 19.91 10.1666 19.0767C9.94485 18.7175 9.94441 18.2826 10.1666 17.9232ZM15.5 16C12.8 16 11.4527 17.7445 11.0172 18.4492C11.0025 18.4729 11 18.4898 11 18.4998C11 18.5099 11.0024 18.5269 11.0173 18.5511C11.4529 19.2555 12.8001 21 15.5 21C18.1995 21 19.5473 19.2551 19.9823 18.5509C19.9973 18.5269 20 18.5095 20 18.4998C20 18.4902 19.9977 18.4737 19.983 18.4501L19.9823 18.449C19.5474 17.7445 18.1996 16 15.5 16Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'fileView');
export default IconComponent;
