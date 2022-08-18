import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.15746 3.15746C3.36741 2.94751 3.7078 2.94751 3.91774 3.15746L10 9.23972L16.0823 3.15746C16.2922 2.94751 16.6326 2.94751 16.8425 3.15746C17.0525 3.36741 17.0525 3.7078 16.8425 3.91774L10.7603 10L16.8425 16.0823C17.0525 16.2922 17.0525 16.6326 16.8425 16.8425C16.6326 17.0525 16.2922 17.0525 16.0823 16.8425L9.99924 10.7595L3.91774 16.8425C3.7078 17.0525 3.36741 17.0525 3.15746 16.8425C2.94751 16.6326 2.94751 16.2922 3.15746 16.0823L9.23896 9.99924L3.15746 3.91774C2.94751 3.7078 2.94751 3.36741 3.15746 3.15746Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-20-close');
export default IconComponent;
