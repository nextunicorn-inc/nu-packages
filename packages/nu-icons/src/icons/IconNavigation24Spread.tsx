import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.15474 8.84604C3.94842 8.65249 3.94842 8.3387 4.15474 8.14516C4.33814 7.97312 4.62283 7.954 4.82874 8.08781L4.90191 8.14516L12 14.8035L19.0981 8.14516C19.2815 7.97312 19.5662 7.954 19.7721 8.08781L19.8453 8.14516C20.0287 8.31719 20.049 8.58425 19.9064 8.7774L19.8453 8.84604L12.3736 15.8548C12.1902 16.0269 11.9055 16.046 11.6996 15.9122L11.6264 15.8548L4.15474 8.84604Z"
        fill="#464646"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-24-spread');
export default IconComponent;
