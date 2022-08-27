import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#616161', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 9.5V3.5C10.5 3.22386 10.2761 3 10 3C9.72386 3 9.5 3.22386 9.5 3.5V9.5H3.5C3.22386 9.5 3 9.72386 3 10C3 10.2761 3.22386 10.5 3.5 10.5H9.5V16.5C9.5 16.7761 9.72386 17 10 17C10.2761 17 10.5 16.7761 10.5 16.5V10.5H16.5C16.7761 10.5 17 10.2761 17 10C17 9.72386 16.7761 9.5 16.5 9.5H10.5Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'plus');
export default IconComponent;
