import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#616161', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 14.5V24C28 24.8284 27.3284 25.5 26.5 25.5H5.5C4.67157 25.5 4 24.8284 4 24V14.5H28ZM28 13V12V10.5C28 9.67157 27.3284 9 26.5 9H16.3486C15.8845 9 15.4466 8.78521 15.1625 8.41826L13.7407 6.58174C13.4566 6.21479 13.0187 6 12.5546 6H5.5C4.67157 6 4 6.67157 4 7.5V13H28Z"
        fill="#424957"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'fold');
export default IconComponent;
