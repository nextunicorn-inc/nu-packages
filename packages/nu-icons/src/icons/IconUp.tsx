import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize16 {
  size: '16';
}
type OverrideIconSize = OverrideIconSize16;

const SvgComponent = ({
  size,
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
          d="M12.1315 12H3.86852C3.06982 12 2.59343 11.1099 3.03647 10.4453L7.16795 4.24808C7.56377 3.65434 8.43623 3.65434 8.83205 4.24808L12.9635 10.4453C13.4066 11.1099 12.9302 12 12.1315 12Z"
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
 * 사용가능한 사이즈는 16 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'up');
export default IconComponent;
