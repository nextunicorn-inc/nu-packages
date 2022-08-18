import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8.5C14 11.5376 11.5376 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3C11.5376 3 14 5.46243 14 8.5ZM12.7291 13.4362C11.5923 14.411 10.1149 15 8.5 15C4.91015 15 2 12.0899 2 8.5C2 4.91015 4.91015 2 8.5 2C12.0899 2 15 4.91015 15 8.5C15 10.1149 14.411 11.5923 13.4362 12.7291L17.4805 16.7734C17.6757 16.9686 17.6757 17.2852 17.4805 17.4805C17.2852 17.6757 16.9686 17.6757 16.7734 17.4805L12.7291 13.4362Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'search-20');
export default IconComponent;
