import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00001 2C11.3137 2 14 4.68629 14 8.00001C14 11.3137 11.3137 14 8.00001 14C4.68629 14 2 11.3137 2 8.00001C2 4.68629 4.68629 2 8.00001 2ZM8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3ZM10.924 6.765C11.0704 6.53083 10.9992 6.22236 10.765 6.076C10.5308 5.92965 10.2224 6.00083 10.076 6.235L7.90912 9.70201L5.85355 7.64645C5.65829 7.45118 5.34171 7.45118 5.14645 7.64645C4.95118 7.84171 4.95118 8.15829 5.14645 8.35355L7.20201 10.4091C7.65674 10.8638 8.41628 10.7773 8.75712 10.232L10.924 6.765Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'check-16-selected');
export default IconComponent;
