import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#D6DAE0" />
      <mask
        id="mask0_952_26354"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="5"
        y="7"
        width="7"
        height="8"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M5 7.5H11.796V14.4573H5V7.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_952_26354)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.57657 7.9656C6.72455 7.92244 6.88722 7.87287 7.06544 7.81648C7.2432 7.76054 7.44345 7.70915 7.66474 7.66144C7.88649 7.61414 8.1339 7.57549 8.40743 7.54502C8.68142 7.51501 8.99161 7.5 9.33934 7.5C10.3643 7.5 11.068 7.79283 11.4506 8.3794C11.8327 8.96551 11.8978 9.7676 11.6458 10.7848L10.7597 14.4573H8.81794L9.67794 10.862C9.73017 10.6383 9.77142 10.4205 9.80208 10.2091C9.83236 9.99813 9.83003 9.81259 9.79524 9.653C9.76042 9.49387 9.68023 9.36427 9.55425 9.26513C9.42823 9.16599 9.23489 9.11646 8.97465 9.11646C8.7222 9.11646 8.46608 9.14238 8.20584 9.19373L6.94171 14.4573H5L6.57657 7.9656Z"
          fill="#FEFEFE"
        />
      </g>
      <mask
        id="mask1_952_26354"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="12"
        y="9"
        width="7"
        height="8"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.204 9.54269H19V16.5H12.204V9.54269Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_952_26354)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.4234 16.0345C17.2755 16.0776 17.1128 16.1272 16.9346 16.1836C16.7568 16.2395 16.5566 16.2909 16.3353 16.3386C16.1135 16.3859 15.8661 16.4246 15.5926 16.455C15.3186 16.485 15.0084 16.5001 14.6607 16.5001C13.6358 16.5001 12.932 16.2072 12.5494 15.6207C12.1673 15.0345 12.1022 14.2325 12.3542 13.2153L13.2403 9.54269H15.1821L14.3221 13.138C14.2698 13.3617 14.2286 13.5795 14.1979 13.7909C14.1677 14.0019 14.1699 14.1874 14.2048 14.3471C14.2396 14.5062 14.3198 14.6358 14.4458 14.7349C14.5718 14.8341 14.7651 14.8836 15.0254 14.8836C15.2779 14.8836 15.534 14.8577 15.7942 14.8063L17.0583 9.54269H19.0001L17.4234 16.0345Z"
          fill="#FEFEFE"
        />
      </g>
      <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#D6DAE0" />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'logo-24');
export default IconComponent;
