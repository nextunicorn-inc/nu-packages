import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  size = '20',
  color = '#006EFF',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
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
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.0002 8.0001L8.00016 12.0002L4.00007 8.0001"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  throw new Error(`${size}는 피그마에 없는 사이즈 입니다.`);
}

/** size = 16 써주세요. */
const IconComponent = convertIcon(SvgComponent, 'flow-down');
export default IconComponent;
