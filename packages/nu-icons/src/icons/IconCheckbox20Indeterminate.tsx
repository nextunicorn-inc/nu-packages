import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3ZM5 2C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V5C18 3.34315 16.6569 2 15 2H5Z"
        fill="#595959"
      />
      <rect x="6" y="9.5" width="8" height="1" rx="0.5" fill="#595959" />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'checkbox-20-indeterminate');
export default IconComponent;
