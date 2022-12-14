import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#616161', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="4.5" width="15" height="11" rx="0.5" stroke={color} />
      <path
        d="M2.5 4.5L9.34507 10.4324C9.72093 10.7581 10.2791 10.7581 10.6549 10.4324L17.5 4.5"
        stroke={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'mail');
export default IconComponent;
