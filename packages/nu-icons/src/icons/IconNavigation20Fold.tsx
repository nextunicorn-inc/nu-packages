import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.15771 13.8326C3.34463 14.031 3.63478 14.053 3.84464 13.8988L3.91921 13.8326L10 7.37943L16.0808 13.8326C16.2677 14.031 16.5579 14.053 16.7677 13.8988L16.8423 13.8326C17.0292 13.6343 17.05 13.3264 16.9046 13.1037L16.8423 13.0245L10.3807 6.16737C10.1938 5.96901 9.90368 5.94697 9.69382 6.10125L9.61925 6.16737L3.15771 13.0245C2.94743 13.2477 2.94743 13.6095 3.15771 13.8326Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-20-fold');
export default IconComponent;
