import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.84604 4.15474C9.65249 3.94842 9.3387 3.94842 9.14516 4.15474C8.97312 4.33814 8.954 4.62283 9.08781 4.82874L9.14516 4.90191L15.8035 12L9.14516 19.0981C8.97312 19.2815 8.954 19.5662 9.08781 19.7721L9.14516 19.8453C9.3172 20.0287 9.58425 20.049 9.7774 19.9064L9.84604 19.8453L16.8548 12.3736C17.0269 12.1902 17.046 11.9055 16.9122 11.6996L16.8548 11.6264L9.84604 4.15474Z"
        fill="#464646"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-24-arrNext');
export default IconComponent;
