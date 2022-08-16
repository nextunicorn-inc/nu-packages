import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3.5C6 3.22386 6.22386 3 6.5 3C6.77614 3 7 3.22386 7 3.5V4H13V3.5C13 3.22386 13.2239 3 13.5 3C13.7761 3 14 3.22386 14 3.5V4H16C17.1046 4 18 4.97683 18 6.18182V7V8V13.8182C18 15.0232 17.1046 16 16 16H4C2.89543 16 2 15.0232 2 13.8182V8V7V6.18182C2 4.97683 2.89543 4 4 4H6V3.5ZM13 5V5.5C13 5.77614 13.2239 6 13.5 6C13.7761 6 14 5.77614 14 5.5V5H16L16.1166 5.00748C16.614 5.07166 17 5.54129 17 6.11111V7H3V6.11111L3.00673 5.98153C3.06449 5.42893 3.48716 5 4 5H6V5.5C6 5.77614 6.22386 6 6.5 6C6.77614 6 7 5.77614 7 5.5V5H13ZM3 8V13.8889C3 14.4587 3.38604 14.9283 3.88338 14.9925L4 15H16C16.5128 15 16.9355 14.5711 16.9933 14.0185L17 13.8889V8H3Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'calendar-20');
export default IconComponent;
