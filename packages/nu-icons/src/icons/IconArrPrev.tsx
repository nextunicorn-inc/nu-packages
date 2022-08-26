import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color, size, ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  if (size === '24') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.154 4.15474C14.3475 3.94842 14.6613 3.94842 14.8548 4.15474C15.0269 4.33814 15.046 4.62283 14.9122 4.82874L14.8548 4.90191L8.19648 12L14.8548 19.0981C15.0269 19.2815 15.046 19.5662 14.9122 19.7721L14.8548 19.8453C14.6828 20.0287 14.4158 20.049 14.2226 19.9064L14.154 19.8453L7.14516 12.3736C6.97312 12.1902 6.954 11.9055 7.08781 11.6996L7.14516 11.6264L14.154 4.15474Z"
          fill={color || '#616161'}
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8326 16.8423C13.031 16.6554 13.053 16.3652 12.8988 16.1554L12.8326 16.0808L6.37943 10L12.8326 3.91921C13.031 3.73229 13.053 3.44214 12.8988 3.23229L12.8326 3.15771C12.6343 2.97079 12.3264 2.95003 12.1037 3.09541L12.0245 3.15771L5.16737 9.61925C4.96901 9.80617 4.94697 10.0963 5.10125 10.3062L5.16737 10.3807L12.0245 16.8423C12.2477 17.0526 12.6095 17.0526 12.8326 16.8423Z"
        fill={color || '#616161'}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-arrPrev');
export default IconComponent;
