import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.15335 4.15335C4.35781 3.94888 4.6893 3.94888 4.89376 4.15335L16 15.2596L27.1062 4.15335C27.3107 3.94888 27.6422 3.94888 27.8467 4.15335C28.0511 4.35781 28.0511 4.6893 27.8467 4.89376L16.7404 16L27.8467 27.1062C28.0511 27.3107 28.0511 27.6422 27.8467 27.8467C27.6422 28.0511 27.3107 28.0511 27.1062 27.8467L16 16.7404L4.89376 27.8467C4.6893 28.0511 4.35781 28.0511 4.15335 27.8467C3.94888 27.6422 3.94888 27.3107 4.15335 27.1062L15.2596 16L4.15335 4.89376C3.94888 4.6893 3.94888 4.35781 4.15335 4.15335Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-32-close');
export default IconComponent;
