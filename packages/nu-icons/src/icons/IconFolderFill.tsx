import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color, size, ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  if (size === '32') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 14.5V24C28 24.8284 27.3284 25.5 26.5 25.5H5.5C4.67157 25.5 4 24.8284 4 24V14.5H28ZM28 13V12V10.5C28 9.67157 27.3284 9 26.5 9H16.3486C15.8845 9 15.4466 8.78521 15.1625 8.41826L13.7407 6.58174C13.4566 6.21479 13.0187 6 12.5546 6H5.5C4.67157 6 4 6.67157 4 7.5V13H28Z"
          fill={color || '#424957'}
        />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6.5C4 5.67157 4.67157 5 5.5 5H10C10.4721 5 10.9167 5.22229 11.2 5.6L12.1 6.8C12.1944 6.9259 12.3426 7 12.5 7H19C19.8284 7 20.5 7.67157 20.5 8.5V9H4V6.5ZM4 10V17.5C4 18.3284 4.67157 19 5.5 19H19C19.8284 19 20.5 18.3284 20.5 17.5V10H4Z"
        fill={color || '#616161'}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'folder-fill');
export default IconComponent;
