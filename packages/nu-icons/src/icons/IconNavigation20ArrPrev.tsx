import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8326 16.8423C13.031 16.6554 13.053 16.3652 12.8988 16.1554L12.8326 16.0808L6.37943 10L12.8326 3.91921C13.031 3.73229 13.053 3.44214 12.8988 3.23229L12.8326 3.15771C12.6343 2.97079 12.3264 2.95003 12.1037 3.09541L12.0245 3.15771L5.16737 9.61925C4.96901 9.80617 4.94697 10.0963 5.10125 10.3062L5.16737 10.3807L12.0245 16.8423C12.2477 17.0526 12.6095 17.0526 12.8326 16.8423Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-20-arrPrev');
export default IconComponent;
