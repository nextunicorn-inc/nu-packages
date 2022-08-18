import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#616161', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 9.5H19.5M19.5 9.5V17.5C19.5 18.0523 19.0523 18.5 18.5 18.5H5C4.44772 18.5 4 18.0523 4 17.5V6.5C4 5.94772 4.44772 5.5 5 5.5H9.5C9.81476 5.5 10.1111 5.64819 10.3 5.9L11.2 7.1C11.3889 7.35181 11.6852 7.5 12 7.5H18.5C19.0523 7.5 19.5 7.94772 19.5 8.5V9.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'folder-default');
export default IconComponent;