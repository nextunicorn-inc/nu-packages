import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4498 3C14.5642 3 17.8996 6.33538 17.8996 10.4498C17.8996 12.3282 17.2043 14.0443 16.0571 15.3547L20.8545 20.1522C21.0485 20.3461 21.0485 20.6606 20.8545 20.8545C20.6606 21.0485 20.3461 21.0485 20.1522 20.8545L15.3548 16.0571C14.0443 17.2043 12.3283 17.8996 10.4498 17.8996C6.33538 17.8996 3 14.5642 3 10.4498C3 6.33538 6.33538 3 10.4498 3ZM10.4498 3.99331C6.88397 3.99331 3.99331 6.88397 3.99331 10.4498C3.99331 14.0156 6.88397 16.9063 10.4498 16.9063C14.0156 16.9063 16.9063 14.0156 16.9063 10.4498C16.9063 6.88397 14.0156 3.99331 10.4498 3.99331Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'search-24');
export default IconComponent;
