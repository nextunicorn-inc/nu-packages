import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ size = '24', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  if (size === '16') {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 5L8 11L13.5 5"
          stroke="#616161"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (size === '20') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8423 6.16737C16.6554 5.96901 16.3652 5.94697 16.1554 6.10125L16.0808 6.16737L10 12.6206L3.91921 6.16737C3.73229 5.96901 3.44214 5.94697 3.23229 6.10125L3.15771 6.16737C2.97079 6.36573 2.95003 6.67364 3.09541 6.89635L3.15771 6.97549L9.61925 13.8326C9.80617 14.031 10.0963 14.053 10.3062 13.8988L10.3807 13.8326L16.8423 6.97549C17.0526 6.75233 17.0526 6.39052 16.8423 6.16737Z"
          fill="#616161"
        />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.15474 8.84604C3.94842 8.65249 3.94842 8.3387 4.15474 8.14516C4.33814 7.97312 4.62283 7.954 4.82874 8.08781L4.90191 8.14516L12 14.8035L19.0981 8.14516C19.2815 7.97312 19.5662 7.954 19.7721 8.08781L19.8453 8.14516C20.0287 8.31719 20.049 8.58425 19.9064 8.7774L19.8453 8.84604L12.3736 15.8548C12.1902 16.0269 11.9055 16.046 11.6996 15.9122L11.6264 15.8548L4.15474 8.84604Z"
        fill="#616161"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'spread_navigation');
export default IconComponent;
