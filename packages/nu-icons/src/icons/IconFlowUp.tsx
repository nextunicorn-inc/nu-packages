import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  size = '20',
  color = '#FF3334',
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
          d="M8.00024 12.0002V4"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 8.00009L8.00009 4L12.0002 8.00009"
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

const IconComponent = convertIcon(SvgComponent, 'flow-up');
export default IconComponent;
