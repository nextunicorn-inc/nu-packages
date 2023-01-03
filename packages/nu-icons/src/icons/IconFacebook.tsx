import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize40 {
  size: '40';
}
interface OverrideIconSize32 {
  size: '32';
}
type OverrideIconSize = OverrideIconSize40 | OverrideIconSize32;

const SvgComponent = ({
  size,
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '40') {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 20C2.5 10.335 10.335 2.5 20 2.5C29.665 2.5 37.5 10.335 37.5 20C37.5 29.665 29.665 37.5 20 37.5C10.335 37.5 2.5 29.665 2.5 20ZM22.0684 30V20.6239H24.657L25 17.3928H22.0684L22.0728 15.7757C22.0728 14.933 22.1528 14.4814 23.3634 14.4814H24.9817V11.25H22.3927C19.283 11.25 18.1884 12.8174 18.1884 15.4533V17.3932H16.25V20.6243H18.1884V30H22.0684Z"
          fill={color}
        />
      </svg>
    );
  }
  if (size === '32') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM17.6547 24V16.4991H19.7256L20 13.9143H17.6547L17.6582 12.6205C17.6582 11.9464 17.7223 11.5851 18.6907 11.5851H19.9853V9H17.9142C15.4264 9 14.5507 10.2539 14.5507 12.3626V13.9146H13V16.4994H14.5507V24H17.6547Z"
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
 * 사용가능한 사이즈는 32, 40 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'facebook');
export default IconComponent;
