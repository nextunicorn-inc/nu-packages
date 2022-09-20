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
          d="M13.1 20C13.3761 20 13.6 20.2239 13.6 20.5C13.6 20.7761 13.3761 21 13.1 21H5.9C4.30267 21 3 19.7474 3 18.1923V5.80769C3 4.25256 4.30267 3 5.9 3H13.1C14.6973 3 16 4.25256 16 5.80769V8.01604C16 8.29218 15.7761 8.51604 15.5 8.51604C15.2239 8.51604 15 8.29218 15 8.01604V5.80769C15 4.81381 14.1536 4 13.1 4H5.9C4.84637 4 4 4.81381 4 5.80769V18.1923C4 19.1862 4.84637 20 5.9 20H13.1ZM10 14.5C10 16.9853 12.0147 19 14.5 19C15.5625 19 16.539 18.6318 17.3088 18.016L20.1464 20.8536C20.3417 21.0488 20.6583 21.0488 20.8536 20.8536C21.0488 20.6583 21.0488 20.3417 20.8536 20.1464L18.016 17.3088C18.6318 16.539 19 15.5625 19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5ZM18 14.5C18 16.433 16.433 18 14.5 18C12.567 18 11 16.433 11 14.5C11 12.567 12.567 11 14.5 11C16.433 11 18 12.567 18 14.5Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'unicorncard');
export default IconComponent;
