import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.17495 16.4411C6.13165 14.7002 4.36217 13.1927 3.11075 11.7551C1.83843 10.2936 1 8.79287 1 7.05862C1 5.70182 1.45113 4.43767 2.3211 3.50215C3.19987 2.55718 4.45913 2 5.95 2C7.83578 2 9.14217 3.10904 10.0082 4.02232C10.3277 3.69541 10.6967 3.35059 11.1104 3.04495C11.875 2.47996 12.8545 2 14.05 2C15.5409 2 16.8001 2.55718 17.6789 3.50215C18.5489 4.43767 19 5.70182 19 7.05862C19 8.79286 18.1616 10.2936 16.8894 11.7559C15.6423 13.1894 13.8804 14.6937 11.8458 16.4309L11.7673 16.4979L9.99774 18L8.2315 16.4893L8.17498 16.4411L8.17495 16.4411Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'heart-20-selected');
export default IconComponent;
