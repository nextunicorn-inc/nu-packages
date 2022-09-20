import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#616161', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 11.5C12 10.9477 12.4477 10.5 13 10.5H15C15.5523 10.5 16 10.9477 16 11.5V15.5C16 16.0523 15.5523 16.5 15 16.5H12V11.5Z"
        stroke={color}
      />
      <path
        d="M8 8C8 7.44772 8.44772 7 9 7H11C11.5523 7 12 7.44772 12 8V16.5H8V8Z"
        stroke={color}
      />
      <path
        d="M4 4.5C4 3.94772 4.44772 3.5 5 3.5H7C7.55228 3.5 8 3.94772 8 4.5V16.5H5C4.44772 16.5 4 16.0523 4 15.5V4.5Z"
        stroke={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'rank');
export default IconComponent;
