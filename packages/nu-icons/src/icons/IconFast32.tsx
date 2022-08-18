import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="action/32/fast">
        <path
          id="Vector 1"
          d="M7.7655 15.3185L12.4404 3.3185C12.5152 3.12646 12.7002 3 12.9063 3H21.19C21.561 3 21.8028 3.38993 21.6378 3.7223L17.8877 11.2777C17.7228 11.6101 17.9646 12 18.3356 12H23.2965C23.7414 12 23.9647 12.5375 23.6508 12.8528L9.24044 27.3237C8.85905 27.7067 8.22559 27.2961 8.41939 26.7916L12.3036 16.6793C12.4293 16.3518 12.1876 16 11.8368 16H8.23139C7.87958 16 7.63779 15.6463 7.7655 15.3185Z"
          fill="#FFB633"
        />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'fast-32');
export default IconComponent;
