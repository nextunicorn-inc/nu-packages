import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8571 2H6.14286C4.95939 2 4 2.94332 4 4.10697V17.1572C4 17.6226 4.38376 18 4.85714 18C5.04618 18 5.22992 17.9385 5.37975 17.8252L9.7387 14.5283C9.89275 14.4118 10.1073 14.4118 10.2613 14.5283L14.6202 17.8252C14.9955 18.109 15.5336 18.04 15.8222 17.671C15.9375 17.5237 16 17.343 16 17.1572V4.10697C16 2.94332 15.0406 2 13.8571 2Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'bookmark-20-selected');
export default IconComponent;
