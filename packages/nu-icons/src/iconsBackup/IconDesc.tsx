import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 10L8.78087 14.0239C8.38054 14.5243 7.61946 14.5243 7.21913 14.0239L4 10"
        stroke="#424242"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6L7.21913 1.97609C7.61946 1.47568 8.38054 1.47568 8.78087 1.97609L12 6"
        stroke="#D1D1D1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'desc');
export default IconComponent;
