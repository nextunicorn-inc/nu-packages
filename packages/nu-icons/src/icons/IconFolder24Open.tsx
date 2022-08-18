import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.55714 11.5L6.30664 10.0427C6.478 9.70945 6.82124 9.5 7.19592 9.5H18.9286M18.9286 9.5H20.2456C20.8879 9.5 21.3636 10.0967 21.2205 10.7228L19.6205 17.7228C19.5166 18.1775 19.1121 18.5 18.6456 18.5H4.5C3.94771 18.5 3.5 18.0523 3.5 17.5V6.5C3.5 5.94772 3.94772 5.5 4.5 5.5H9.17988C9.48987 5.5 9.78233 5.64376 9.97167 5.8892L10.914 7.1108C11.1034 7.35624 11.3958 7.5 11.7058 7.5H17.9286C18.4809 7.5 18.9286 7.94772 18.9286 8.5V9.5Z"
        stroke="#616161"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'folder-24-open');
export default IconComponent;
