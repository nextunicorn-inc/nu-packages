import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H21.5C21.7761 5 22 4.77614 22 4.5C22 4.22386 21.7761 4 21.5 4H2.5ZM2 12C2 11.7239 2.22386 11.5 2.5 11.5H21.5C21.7761 11.5 22 11.7239 22 12C22 12.2761 21.7761 12.5 21.5 12.5H2.5C2.22386 12.5 2 12.2761 2 12ZM2 19.5C2 19.2239 2.22386 19 2.5 19H21.5C21.7761 19 22 19.2239 22 19.5C22 19.7761 21.7761 20 21.5 20H2.5C2.22386 20 2 19.7761 2 19.5Z"
        fill="#555555"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-24-menu');
export default IconComponent;
