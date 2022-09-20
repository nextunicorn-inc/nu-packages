import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize16 {
  size: '16';
}
type OverrideIconSize = OverrideIconSize16;

const SvgComponent = ({
  size,
  color = '#FF3334',
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
          d="M8.00024 12.0002V4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8.00009L8.00009 4L12.0002 8.00009"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#FF3334
 * 사용가능한 사이즈는 16 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'flow-up');
export default IconComponent;
