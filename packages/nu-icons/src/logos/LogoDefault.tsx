import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.2" y="0.2" width="19.6" height="19.6" rx="3.8" fill="#E8EAED" />
      <g clip-path="url(#clip0_3103_10075)">
        <path
          d="M15.1897 12.4285C15.5948 12.4285 16 12.0739 16 11.598C16 11.1524 15.6151 10.7876 15.1897 10.7876C14.7643 10.7876 14.3794 11.1524 14.3794 11.598C14.3794 12.0435 14.7441 12.4285 15.1897 12.4285Z"
          fill="#FEFEFE"
        />
        <path
          d="M4 12.2463H5.23569V9.38012C5.23569 8.63074 5.5903 8.15454 6.40034 8.15454C7.21037 8.15454 7.56499 8.63045 7.56499 9.38012V12.2463H8.80067V9.40034C8.80067 7.91139 7.9095 7 6.40034 7C4.89118 7 4 7.91139 4 9.40034V12.2463Z"
          fill="#FEFEFE"
        />
        <path
          d="M11.7985 12.4285C13.3784 12.4285 14.1988 11.4865 14.1988 10.1598V7.18222H12.9631V10.018C12.9631 10.7876 12.5479 11.2537 11.7884 11.2537C11.0289 11.2537 10.6338 10.7879 10.6338 10.018V7.18222H9.39816V10.1598C9.39816 11.4865 10.2287 12.4285 11.7985 12.4285Z"
          fill="#FEFEFE"
        />
      </g>
      <rect
        x="0.2"
        y="0.2"
        width="19.6"
        height="19.6"
        rx="3.8"
        stroke="#E8EAED"
        stroke-width="0.4"
      />
      <defs>
        <clipPath id="clip0_3103_10075">
          <rect width="12" height="5.42848" fill="white" transform="translate(4 7)" />
        </clipPath>
      </defs>
    </svg>
  );
}

/**
 * 현재는 size 20만 가능
 * */
const IconComponent = convertIcon(SvgComponent, 'logo-default');
export default IconComponent;
