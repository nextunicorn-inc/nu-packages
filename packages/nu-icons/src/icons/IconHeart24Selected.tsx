import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9975 21L10.035 19.3004L9.9722 19.2463C7.70185 17.2878 5.73575 15.5918 4.34528 13.9745C2.93159 12.3303 2 10.642 2 8.69094C2 7.16455 2.50126 5.74238 3.46789 4.68992C4.4443 3.62682 5.84348 3 7.5 3C9.59531 3 11.0469 4.24767 12.0091 5.27511C12.3641 4.90733 12.7741 4.51941 13.2338 4.17557C14.0834 3.53995 15.1716 3 16.5 3C18.1565 3 19.5557 3.62682 20.5321 4.68992C21.4987 5.74238 22 7.16455 22 8.69094C22 10.642 21.0684 12.3303 19.6549 13.9754C18.2693 15.5881 16.3116 17.2804 14.0509 19.2347L13.9636 19.3102L11.9975 21Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'heart-24-selected');
export default IconComponent;
