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
          d="M9.84604 4.15474C9.65249 3.94842 9.3387 3.94842 9.14516 4.15474C8.97312 4.33814 8.954 4.62283 9.08781 4.82874L9.14516 4.90191L15.8035 12L9.14516 19.0981C8.97312 19.2815 8.954 19.5662 9.08781 19.7721L9.14516 19.8453C9.3172 20.0287 9.58425 20.049 9.7774 19.9064L9.84604 19.8453L16.8548 12.3736C17.0269 12.1902 17.046 11.9055 16.9122 11.6996L16.8548 11.6264L9.84604 4.15474Z"
          fill={color || '#616161'}
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.16737 16.8423C6.96901 16.6554 6.94697 16.3652 7.10125 16.1554L7.16737 16.0808L13.6206 10L7.16737 3.91921C6.96901 3.73229 6.94697 3.44214 7.10125 3.23229L7.16737 3.15771C7.36573 2.97079 7.67364 2.95003 7.89635 3.09541L7.97549 3.15771L14.8326 9.61925C15.031 9.80617 15.053 10.0963 14.8988 10.3062L14.8326 10.3807L7.97549 16.8423C7.75233 17.0526 7.39052 17.0526 7.16737 16.8423Z"
        fill={color || '#616161'}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-arrNext');
export default IconComponent;
