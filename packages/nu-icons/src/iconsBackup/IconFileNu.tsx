import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

// @todo default 24로 바꾸기
function SvgComponent({ size, ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" fill="#E8EAED" />
      <mask
        id="mask0_1500_5001"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="10"
        y="13"
        width="10"
        height="11"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 13H19.9054V23.2179H10V13Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1500_5001)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2979 13.6837C12.5136 13.6203 12.7507 13.5475 13.0105 13.4647C13.2695 13.3825 13.5614 13.3071 13.884 13.237C14.2072 13.1675 14.5678 13.1107 14.9664 13.066C15.3658 13.0219 15.8179 12.9999 16.3247 12.9999C17.8186 12.9999 18.8443 13.4299 19.402 14.2914C19.9589 15.1522 20.0537 16.3302 19.6865 17.8241L18.3949 23.2178H15.5648L16.8182 17.9376C16.8944 17.609 16.9545 17.2892 16.9992 16.9786C17.0433 16.6688 17.0399 16.3963 16.9892 16.1619C16.9385 15.9282 16.8216 15.7379 16.638 15.5923C16.4543 15.4467 16.1725 15.3739 15.7932 15.3739C15.4252 15.3739 15.0519 15.412 14.6726 15.4874L12.8301 23.2178H10L12.2979 13.6837Z"
          fill="#FEFEFE"
        />
      </g>
      <mask
        id="mask1_1500_5001"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="20"
        y="16"
        width="11"
        height="11"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.5 16H30.4053V26.218H20.5V16Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_1500_5001)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.1075 25.5341C27.8918 25.5975 27.6547 25.6703 27.3949 25.7531C27.1358 25.8352 26.844 25.9107 26.5215 25.9808C26.1982 26.0502 25.8376 26.107 25.439 26.1517C25.0396 26.1958 24.5875 26.2179 24.0807 26.2179C22.5868 26.2179 21.561 25.7877 21.0034 24.9263C20.4465 24.0655 20.3516 22.8875 20.719 21.3937L22.0105 15.9998H24.8406L23.5871 21.2801C23.511 21.6087 23.4509 21.9286 23.4061 22.2391C23.3621 22.549 23.3654 22.8214 23.4162 23.0558C23.467 23.2895 23.5838 23.4799 23.7674 23.6255C23.9511 23.7711 24.2329 23.8438 24.6122 23.8438C24.9802 23.8438 25.3535 23.8058 25.7328 23.7303L27.5753 15.9998H30.4054L28.1075 25.5341Z"
          fill="#FEFEFE"
        />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'file-nu');
export default IconComponent;
