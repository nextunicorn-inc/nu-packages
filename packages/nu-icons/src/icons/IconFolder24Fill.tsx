import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6.5C4 5.67157 4.67157 5 5.5 5H10C10.4721 5 10.9167 5.22229 11.2 5.6L12.1 6.8C12.1944 6.9259 12.3426 7 12.5 7H19C19.8284 7 20.5 7.67157 20.5 8.5V9H4V6.5ZM4 10V17.5C4 18.3284 4.67157 19 5.5 19H19C19.8284 19 20.5 18.3284 20.5 17.5V10H4Z"
        fill="#616161"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'folder-24-fill');
export default IconComponent;
