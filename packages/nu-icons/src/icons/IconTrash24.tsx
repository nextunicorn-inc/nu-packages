import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 6.5H20.5" stroke="#595959" strokeLinecap="round" />
      <path d="M12 10V16.5" stroke="#595959" strokeLinecap="round" />
      <path
        d="M5 6.5L5.93366 19.5712C5.97104 20.0946 6.40648 20.5 6.93112 20.5H17.0689C17.5935 20.5 18.029 20.0946 18.0663 19.5712L19 6.5"
        stroke="#595959"
        strokeLinecap="round"
      />
      <path
        d="M8.5 6V4.5C8.5 3.94772 8.94772 3.5 9.5 3.5H14.5C15.0523 3.5 15.5 3.94772 15.5 4.5V6"
        stroke="#595959"
        strokeLinecap="round"
      />
      <path d="M15 10L14.5 16.5" stroke="#595959" strokeLinecap="round" />
      <path d="M9 10L9.5 16.5" stroke="#595959" strokeLinecap="round" />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'trash-24');
export default IconComponent;
