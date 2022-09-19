import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="48" height="22" viewBox="0 0 48 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2783_8502)">
        <path
          d="M44.7587 21.7139C46.3794 21.7139 48 20.2955 48 18.3918C48 16.6095 46.4602 15.1506 44.7587 15.1506C43.0572 15.1506 41.5175 16.6095 41.5175 18.3918C41.5175 20.1742 42.9764 21.7139 44.7587 21.7139V21.7139Z"
          fill="#00E4DF"
        />
        <path
          d="M0 20.985H4.94275V9.52048C4.94275 6.52294 6.36122 4.61817 9.60135 4.61817C12.8415 4.61817 14.2599 6.52182 14.2599 9.52048V20.985H19.2027V9.60135C19.2027 3.64557 15.638 0 9.60135 0C3.56471 0 0 3.64557 0 9.60135V20.985Z"
          fill="#006EFF"
        />
        <path
          d="M31.194 21.7139C37.5137 21.7139 40.7953 17.9459 40.7953 12.6393V0.728882H35.8526V12.0722C35.8526 15.1506 34.1915 17.0149 31.1536 17.0149C28.1156 17.0149 26.5354 15.1517 26.5354 12.0722V0.728882H21.5926V12.6393C21.5926 17.9459 24.9148 21.7139 31.194 21.7139Z"
          fill="#006EFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_2783_8502">
          <rect width="48" height="21.7139" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'logo-next-unicorn-default-short');
export default IconComponent;
