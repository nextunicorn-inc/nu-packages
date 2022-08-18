import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.8453 15.154C20.0516 15.3475 20.0516 15.6613 19.8453 15.8548C19.6619 16.0269 19.3772 16.046 19.1713 15.9122L19.0981 15.8548L12 9.19648L4.90191 15.8548C4.71851 16.0269 4.43382 16.046 4.22791 15.9122L4.15474 15.8548C3.97134 15.6828 3.95097 15.4158 4.09361 15.2226L4.15474 15.154L11.6264 8.14516C11.8098 7.97312 12.0945 7.954 12.3004 8.08781L12.3736 8.14516L19.8453 15.154Z"
        fill="#464646"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-24-fold');
export default IconComponent;
