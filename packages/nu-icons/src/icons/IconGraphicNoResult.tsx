import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27.4281" cy="27.4281" r="27.4281" fill="#C3C8D2" />
      <circle cx="16.2031" cy="31.7402" r="2.5" fill="#5B606B" />
      <circle cx="38.7578" cy="31.7402" r="2.5" fill="#5B606B" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7939 40.2476C18.514 40.5854 18.5097 41.0734 18.7838 41.4161C19.0578 41.7588 19.5348 41.8619 19.9259 41.6631C22.4675 40.3712 29.0915 38.5668 35.0406 41.6592C35.4313 41.8623 35.911 41.762 36.1876 41.4194C36.4642 41.0767 36.461 40.5866 36.1801 40.2476C35.6423 39.5985 34.8911 39.0504 34.0088 38.6094C33.1227 38.1665 32.0921 37.8252 30.9802 37.595C29.8669 37.3645 28.6806 37.2471 27.487 37.2471C26.2933 37.2471 25.107 37.3645 23.9937 37.595C22.8819 37.8252 21.8512 38.1665 20.9652 38.6094C20.0829 39.0504 19.3317 39.5985 18.7939 40.2476Z"
        fill="#5B606B"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'graphic-noResult');
export default IconComponent;
