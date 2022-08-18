import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.8423 6.16737C16.6554 5.96901 16.3652 5.94697 16.1554 6.10125L16.0808 6.16737L10 12.6206L3.91921 6.16737C3.73229 5.96901 3.44214 5.94697 3.23229 6.10125L3.15771 6.16737C2.97079 6.36573 2.95003 6.67364 3.09541 6.89635L3.15771 6.97549L9.61925 13.8326C9.80617 14.031 10.0963 14.053 10.3062 13.8988L10.3807 13.8326L16.8423 6.97549C17.0526 6.75233 17.0526 6.39052 16.8423 6.16737Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-20-spread');
export default IconComponent;
