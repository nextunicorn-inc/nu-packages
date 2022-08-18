import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.16737 16.8423C6.96901 16.6554 6.94697 16.3652 7.10125 16.1554L7.16737 16.0808L13.6206 10L7.16737 3.91921C6.96901 3.73229 6.94697 3.44214 7.10125 3.23229L7.16737 3.15771C7.36573 2.97079 7.67364 2.95003 7.89635 3.09541L7.97549 3.15771L14.8326 9.61925C15.031 9.80617 15.053 10.0963 14.8988 10.3062L14.8326 10.3807L7.97549 16.8423C7.75233 17.0526 7.39052 17.0526 7.16737 16.8423Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-20-arrNext');
export default IconComponent;
