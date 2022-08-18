import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="16" height="16" rx="3" fill="#006CFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7672 7.07952C13.9769 7.2119 14.0538 7.4698 13.9614 7.68754L13.9187 7.76698L10.2858 13.2723C10.1319 13.5057 9.81786 13.5662 9.58748 13.4235L9.51411 13.3684L6.16392 10.3494C5.95741 10.1633 5.94425 9.8487 6.13452 9.64673C6.30364 9.46719 6.57658 9.43707 6.78018 9.56329L6.85294 9.61797L9.7583 12.2363L13.0643 7.22768C13.2166 6.99693 13.5313 6.9306 13.7672 7.07952Z"
        fill="#FEFEFE"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'checkbox-20-selected');
export default IconComponent;
