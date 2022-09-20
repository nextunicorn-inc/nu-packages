import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize16 {
  size: '16';
}
interface OverrideIconSize24 {
  size: '24';
}
interface OverrideIconSize20 {
  size?: '20';
}
type OverrideIconSize = OverrideIconSize16 | OverrideIconSize24 | OverrideIconSize20;

const SvgComponent = ({
  size = '20',
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '16') {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8ZM5.97752 10.7013C5.79006 10.8888 5.48612 10.8888 5.29866 10.7013C5.1112 10.5138 5.1112 10.2099 5.29866 10.0224L7.32119 7.99998L5.29866 5.97753C5.1112 5.79006 5.1112 5.48613 5.29866 5.29866C5.48612 5.1112 5.79006 5.1112 5.97752 5.29866L8.00002 7.32115L10.0225 5.29868C10.21 5.11122 10.5139 5.11122 10.7014 5.29868C10.8888 5.48614 10.8888 5.79008 10.7014 5.97754L8.67884 7.99998L10.7013 10.0225C10.8888 10.2099 10.8888 10.5139 10.7013 10.7013C10.5139 10.8888 10.2099 10.8888 10.0225 10.7013L8.00002 8.6788L5.97752 10.7013Z"
          fill={color}
        />
      </svg>
    );
  }
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
          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM7.85355 7.14645C7.65829 6.95118 7.34171 6.95118 7.14645 7.14645C6.95118 7.34171 6.95118 7.65829 7.14645 7.85355L11.2929 12L7.14645 16.1464C6.95118 16.3417 6.95118 16.6583 7.14645 16.8536C7.34171 17.0488 7.65829 17.0488 7.85355 16.8536L12 12.7071L16.1464 16.8536C16.3417 17.0488 16.6583 17.0488 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7071 12L16.8536 7.85355C17.0488 7.65829 17.0488 7.34171 16.8536 7.14645C16.6583 6.95118 16.3417 6.95118 16.1464 7.14645L12 11.2929L7.85355 7.14645Z"
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
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM6.85355 6.14645C6.65829 5.95118 6.34171 5.95118 6.14645 6.14645C5.95118 6.34171 5.95118 6.65829 6.14645 6.85355L9.29289 10L6.14645 13.1464C5.95118 13.3417 5.95118 13.6583 6.14645 13.8536C6.34171 14.0488 6.65829 14.0488 6.85355 13.8536L10 10.7071L13.1464 13.8536C13.3417 14.0488 13.6583 14.0488 13.8536 13.8536C14.0488 13.6583 14.0488 13.3417 13.8536 13.1464L10.7071 10L13.8536 6.85355C14.0488 6.65829 14.0488 6.34171 13.8536 6.14645C13.6583 5.95118 13.3417 5.95118 13.1464 6.14645L10 9.29289L6.85355 6.14645Z"
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
 * 사용가능한 사이즈는 16, 20, 24 입니다.
 *
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'close-filled');
export default IconComponent;
