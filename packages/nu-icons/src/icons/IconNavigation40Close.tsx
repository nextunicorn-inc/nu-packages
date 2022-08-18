import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.15625 4.15625C4.36459 3.94792 4.70238 3.94792 4.91072 4.15625L19.9985 19.2455L35.0893 4.15625C35.2976 3.94792 35.6354 3.94792 35.8437 4.15625C36.0521 4.36459 36.0521 4.70238 35.8437 4.91072L20.753 20L35.8437 35.0893C36.0521 35.2976 36.0521 35.6354 35.8437 35.8437C35.6354 36.0521 35.2976 36.0521 35.0893 35.8437L19.9985 20.7545L4.91072 35.8437C4.70238 36.0521 4.36459 36.0521 4.15625 35.8437C3.94792 35.6354 3.94792 35.2976 4.15625 35.0893L19.244 20L4.15625 4.91072C3.94792 4.70238 3.94792 4.36459 4.15625 4.15625Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-40-close');
export default IconComponent;
