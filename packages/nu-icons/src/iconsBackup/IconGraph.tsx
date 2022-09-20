import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#616161', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 13L7.03325 9.76732C7.3992 9.37731 8.00723 9.34427 8.41329 9.69232L10.3467 11.3495C10.7702 11.7125 11.4087 11.6589 11.7657 11.2305L16.0154 6.13086"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0154 9.0825L16.0154 6.13086L13.058 6.66155"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'graph');
export default IconComponent;
