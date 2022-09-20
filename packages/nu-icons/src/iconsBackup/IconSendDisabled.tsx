import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.50643 4.8444L20.1925 10.5996C21.4637 11.2216 21.4637 11.9916 20.1925 12.6137L8.52826 18.816C7.13532 19.4977 6.07848 18.3755 6.64359 16.9314L8.32795 11.9165C8.40593 11.7173 8.40593 11.4959 8.32795 11.2966L6.50097 6.84954C5.93587 5.40538 7.11349 4.16275 8.50643 4.8444Z"
        fill="#989898"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'send_disabled');
export default IconComponent;
