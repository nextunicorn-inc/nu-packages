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
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM16.6865 7.61203C16.6442 7.37878 16.44 7.2019 16.1945 7.2019H12.1945L12.1047 7.20996C11.8714 7.25229 11.6945 7.45644 11.6945 7.7019L11.7026 7.79178C11.7449 8.02503 11.9491 8.2019 12.1945 8.2019L14.9872 8.20153L8.30576 14.883L8.30546 12.091L8.2974 12.0011C8.26036 11.797 8.09942 11.6361 7.89533 11.599L7.80546 11.591L7.71558 11.599C7.51149 11.6361 7.35056 11.797 7.31351 12.0011L7.30546 12.091V16.091L7.31351 16.1809C7.35056 16.385 7.51149 16.5459 7.71558 16.5829L7.80546 16.591H11.8055L11.8953 16.5829C12.1286 16.5406 12.3055 16.3365 12.3055 16.091C12.3055 15.8455 12.1286 15.6414 11.8953 15.599L11.8055 15.591L9.01287 15.5901L15.6957 8.90722L15.6945 11.7019L15.7026 11.7918C15.7449 12.025 15.9491 12.2019 16.1945 12.2019C16.4707 12.2019 16.6945 11.978 16.6945 11.7019V7.7019L16.6865 7.61203Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'larger');
export default IconComponent;
