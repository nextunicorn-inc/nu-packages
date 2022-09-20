import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#616161', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM24.6238 11.8738C24.4168 11.1362 23.8069 10.5554 23.0324 10.3583C21.6288 10 16 10 16 10C16 10 10.3712 10 8.96752 10.3583C8.19301 10.5554 7.58306 11.1362 7.37606 11.8738C7 13.2107 7 16 7 16C7 16 7 18.7892 7.37606 20.1262C7.58306 20.8638 8.19301 21.4446 8.96752 21.6418C10.3712 22 16 22 16 22C16 22 21.6288 22 23.0324 21.6418C23.8069 21.4446 24.4168 20.8638 24.6238 20.1262C25 18.7892 25 16 25 16C25 16 25 13.2107 24.6238 11.8738ZM15 13L19 16.0001L15 19V13Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'youtube');
export default IconComponent;
