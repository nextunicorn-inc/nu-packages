import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.31875 12.9468L9.62463 9.09395C9.85363 8.96868 10.1466 8.96868 10.3746 9.09395L17.6805 12.9468C18.1065 13.1781 18.1065 13.7034 17.6805 13.9348L10.3746 17.9068C10.1466 18.0311 9.85363 18.0311 9.62463 17.9068L2.31875 13.9348C1.89375 13.7034 1.89375 13.1781 2.31875 12.9468Z"
        fill="#006CFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.31875 9.50826L9.62463 6.08351C9.85363 5.97216 10.1466 5.97216 10.3746 6.08351L17.6805 9.50826C18.1065 9.71389 18.1065 10.1817 17.6805 10.3865L10.3746 13.9172C10.1466 14.0276 9.85363 14.0276 9.62463 13.9172L2.31875 10.3865C1.89375 10.1817 1.89375 9.71389 2.31875 9.50826Z"
        fill="#99C4FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.31875 5.9468L9.62463 2.09395C9.85363 1.96868 10.1466 1.96868 10.3746 2.09395L17.6805 5.9468C18.1065 6.17813 18.1065 6.70444 17.6805 6.93476L10.3746 10.9068C10.1466 11.0311 9.85363 11.0311 9.62463 10.9068L2.31875 6.93476C1.89375 6.70444 1.89375 6.17813 2.31875 5.9468Z"
        fill="#006CFF"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'news-20-color');
export default IconComponent;
