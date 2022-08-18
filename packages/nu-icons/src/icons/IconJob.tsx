import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#595959', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2C13.5523 2 14 2.48842 14 3.09091V5H16C17.1046 5 18 5.97683 18 7.18182V9V10V14.8182C18 16.0232 17.1046 17 16 17H4C2.89543 17 2 16.0232 2 14.8182V10V9V7.18182C2 5.97683 2.89543 5 4 5H6V3.09091C6 2.48842 6.44772 2 7 2H13ZM12.9979 5H7V3.44444L7.00288 3.39261C7.02764 3.17157 7.20878 3 7.42857 3H12.5714L12.6214 3.00299C12.8346 3.02866 13 3.21652 13 3.44444L12.9979 5ZM3 14.8889V10H17V14.8889L16.9933 15.0185C16.9355 15.5711 16.5128 16 16 16H4L3.88338 15.9925C3.38604 15.9283 3 15.4587 3 14.8889ZM3 9H17V7.11111C17 6.54129 16.614 6.07166 16.1166 6.00748L16 6H4C3.48716 6 3.06449 6.42893 3.00673 6.98153L3 7.11111V9Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'job');
export default IconComponent;
