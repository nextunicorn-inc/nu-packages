import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#3389FF', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8.5" stroke="#006CFF" />
      <circle cx="10.0004" cy="6.3998" r="0.6" fill="#006CFF" />
      <rect x="9.40039" y="8.2002" width="1.2" height="6" rx="0.5" fill="#006CFF" />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'info');
export default IconComponent;
