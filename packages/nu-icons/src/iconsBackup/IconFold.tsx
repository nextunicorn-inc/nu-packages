import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  color = '#616161',
  size = '24',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
  if (size === '24') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8453 15.154C20.0516 15.3475 20.0516 15.6613 19.8453 15.8548C19.6619 16.0269 19.3772 16.046 19.1713 15.9122L19.0981 15.8548L12 9.19648L4.90191 15.8548C4.71851 16.0269 4.43382 16.046 4.22791 15.9122L4.15474 15.8548C3.97134 15.6828 3.95097 15.4158 4.09361 15.2226L4.15474 15.154L11.6264 8.14516C11.8098 7.97312 12.0945 7.954 12.3004 8.08781L12.3736 8.14516L19.8453 15.154Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.15771 13.8326C3.34463 14.031 3.63478 14.053 3.84464 13.8988L3.91921 13.8326L10 7.37943L16.0808 13.8326C16.2677 14.031 16.5579 14.053 16.7677 13.8988L16.8423 13.8326C17.0292 13.6343 17.05 13.3264 16.9046 13.1037L16.8423 13.0245L10.3807 6.16737C10.1938 5.96901 9.90368 5.94697 9.69382 6.10125L9.61925 6.16737L3.15771 13.0245C2.94743 13.2477 2.94743 13.6095 3.15771 13.8326Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-fold');
export default IconComponent;
