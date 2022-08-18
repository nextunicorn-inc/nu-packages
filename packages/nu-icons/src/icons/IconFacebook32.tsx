import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM17.6547 24V16.4991H19.7256L20 13.9143H17.6547L17.6582 12.6205C17.6582 11.9464 17.7223 11.5851 18.6907 11.5851H19.9853V9H17.9142C15.4264 9 14.5507 10.2539 14.5507 12.3626V13.9146H13V16.4994H14.5507V24H17.6547Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'facebook-32');
export default IconComponent;
