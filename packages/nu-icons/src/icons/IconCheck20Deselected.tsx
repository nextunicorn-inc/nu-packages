import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM13.9614 7.68754C14.0538 7.4698 13.9769 7.2119 13.7672 7.07952C13.5313 6.9306 13.2166 6.99693 13.0643 7.22768L9.7583 12.2363L6.85294 9.61797L6.78018 9.56329C6.57658 9.43707 6.30364 9.46719 6.13452 9.64673C5.94425 9.8487 5.95741 10.1633 6.16392 10.3494L9.51411 13.3684L9.58748 13.4235C9.81786 13.5662 10.1319 13.5057 10.2858 13.2723L13.9187 7.76698L13.9614 7.68754Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'check-20-deselected');
export default IconComponent;
