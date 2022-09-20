import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize16 {
  size: '16';
}
type OverrideIconSize = OverrideIconSize16;

const SvgComponent = ({
  size,
  color = '#006EFF',
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
          d="M8 4.00001L8 12.0002"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0002 8.0001L8.00016 12.0002L4.00007 8.0001"
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
 * 기본컬러:#006EFF
 * 사용가능한 사이즈는 16 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'flow-down');
export default IconComponent;
