import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.154 4.15474C14.3475 3.94842 14.6613 3.94842 14.8548 4.15474C15.0269 4.33814 15.046 4.62283 14.9122 4.82874L14.8548 4.90191L8.19648 12L14.8548 19.0981C15.0269 19.2815 15.046 19.5662 14.9122 19.7721L14.8548 19.8453C14.6828 20.0287 14.4158 20.049 14.2226 19.9064L14.154 19.8453L7.14516 12.3736C6.97312 12.1902 6.954 11.9055 7.08781 11.6996L7.14516 11.6264L14.154 4.15474Z"
        fill="#464646"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-24-arrPrev');
export default IconComponent;
