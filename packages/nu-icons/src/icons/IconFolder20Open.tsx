import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.1 9.61538L5.6199 8.61557C5.79202 8.28458 6.13406 8.07692 6.50712 8.07692H15.5M15.5 8.07692H16.2425C16.8857 8.07692 17.3617 8.6754 17.2168 9.3021L16.0791 14.2252C15.9742 14.6788 15.5703 15 15.1048 15H4.5C3.94772 15 3.5 14.5523 3.5 14V5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H7.81938C8.12316 4.5 8.41047 4.63809 8.60024 4.8753L9.19976 5.62469C9.38953 5.86191 9.67684 6 9.98062 6H14.5C15.0523 6 15.5 6.44772 15.5 7V8.07692Z"
        stroke="#616161"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'folder-20-open');
export default IconComponent;
