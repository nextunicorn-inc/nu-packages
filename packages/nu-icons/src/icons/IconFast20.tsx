import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.73892 10.165L8.06262 3.66503C8.13373 3.46611 8.32219 3.33334 8.53344 3.33334H12.3974C12.7612 3.33334 13.0032 3.70951 12.8524 4.04059L11.1317 7.8184C10.9809 8.14949 11.2229 8.52565 11.5868 8.52565H13.3658C13.8005 8.52565 14.0281 9.04206 13.7349 9.36294L7.1951 16.5196C6.82768 16.9216 6.17337 16.5298 6.35443 16.0161L7.94637 11.4996C8.06102 11.1743 7.8197 10.8333 7.47481 10.8333H6.20974C5.8639 10.8333 5.6225 10.4907 5.73892 10.165Z"
        fill="#FFB633"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'fast-20');
export default IconComponent;
