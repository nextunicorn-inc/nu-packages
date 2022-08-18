import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#595959', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM17.801 23.172H14.198L16 25.2933L17.801 23.172ZM21.04 19.36L10.96 19.36L13.246 22.052H18.752L21.04 19.36ZM21.04 8.16H10.96V18.24H21.04V8.16ZM15.2933 11.0256L16.7119 13.2855V11.0256H18.24V15.5056H16.7069L15.2881 13.2453V15.5056H13.76V11.0256H15.2933Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'post');
export default IconComponent;
