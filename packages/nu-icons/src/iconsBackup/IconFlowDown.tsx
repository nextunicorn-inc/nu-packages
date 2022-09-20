import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  size = '16',
  color = '#006EFF',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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

/** size = 16 써주세요. */
const IconComponent = convertIcon(SvgComponent, 'flow-down');
export default IconComponent;
