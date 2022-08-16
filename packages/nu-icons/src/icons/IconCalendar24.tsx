import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 3C16.7761 3 17 3.22386 17 3.5V5H20C21.0544 5 21.9182 5.81588 21.9945 6.85074L22 7V18C22 19.0544 21.1841 19.9182 20.1493 19.9945L20 20H4C2.94564 20 2.08183 19.1841 2.00549 18.1493L2 18V7C2 5.94564 2.81588 5.08183 3.85074 5.00549L4 5H7V3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5V5H16V3.5C16 3.22386 16.2239 3 16.5 3ZM21 10H3V18C3 18.5128 3.38604 18.9355 3.88338 18.9933L4 19H20C20.5128 19 20.9355 18.614 20.9933 18.1166L21 18V10ZM4 6H7V7.5C7 7.77614 7.22386 8 7.5 8C7.77614 8 8 7.77614 8 7.5V6H16V7.5C16 7.77614 16.2239 8 16.5 8C16.7761 8 17 7.77614 17 7.5V6H20L20.1166 6.00673C20.614 6.06449 21 6.48716 21 7V9H3V7L3.00673 6.88338C3.06449 6.38604 3.48716 6 4 6Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'calendar-24');
export default IconComponent;
