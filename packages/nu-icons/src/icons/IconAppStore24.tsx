import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_30_451"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="2"
        width="16"
        height="20"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M4 2H20V21.5H4V2Z" fill="white" />
      </mask>
      <g mask="url(#mask0_30_451)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8891 5.11185C15.579 4.28961 16.0341 3.13993 15.908 2C14.9202 2.04225 13.7295 2.65406 13.0175 3.47712C12.3791 4.20511 11.8275 5.37673 11.9756 6.49472C13.0698 6.57922 14.1968 5.93572 14.8883 5.11267L14.8891 5.11185ZM12.1246 7.60296C11.3487 7.60296 10.1482 6.72709 8.88374 6.75797C7.21421 6.77991 5.68381 7.71915 4.82368 9.20683C3.09032 12.1927 4.37684 16.603 6.06682 19.0299C6.89586 20.2113 7.87384 21.5405 9.17018 21.4991C10.4141 21.4462 10.8806 20.6971 12.3906 20.6971C13.8882 20.6971 14.3138 21.4991 15.6306 21.4674C16.9711 21.4462 17.8214 20.2649 18.6398 19.0721C19.5851 17.7006 19.9787 16.3698 20 16.2975C19.9681 16.2869 17.3959 15.3054 17.3639 12.3512C17.3435 9.8812 19.3944 8.69983 19.4901 8.64702C18.3198 6.9489 16.5251 6.75878 15.8966 6.71653C14.2598 6.58978 12.8898 7.60215 12.1246 7.60215V7.60296Z"
          fill="#595959"
        />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'appstore-24');
export default IconComponent;
