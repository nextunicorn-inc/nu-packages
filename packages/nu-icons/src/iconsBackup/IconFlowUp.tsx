import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  size = '16',
  color = '#FF3334',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const IconComponent = convertIcon(SvgComponent, 'flow-up');
export default IconComponent;
