import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.1315 12H3.86852C3.06982 12 2.59343 11.1099 3.03647 10.4453L7.16795 4.24808C7.56377 3.65434 8.43623 3.65434 8.83205 4.24808L12.9635 10.4453C13.4066 11.1099 12.9302 12 12.1315 12Z"
        fill="#616161"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'up-16');
export default IconComponent;
