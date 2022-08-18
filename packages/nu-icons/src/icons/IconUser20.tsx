import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.91909 9.3145C7.05813 8.67689 6.5 7.65362 6.5 6.5C6.5 4.567 8.067 3 10 3C11.933 3 13.5 4.567 13.5 6.5C13.5 7.65362 12.9419 8.67689 12.0809 9.3145C14.9307 10.2006 17 12.8586 17 16C17 16.2761 16.7761 16.5 16.5 16.5C16.2239 16.5 16 16.2761 16 16C16 12.6863 13.3137 10 10 10C6.68629 10 4 12.6863 4 16C4 16.2761 3.77614 16.5 3.5 16.5C3.22386 16.5 3 16.2761 3 16C3 12.8586 5.06926 10.2006 7.91909 9.3145ZM10 9C11.3807 9 12.5 7.88071 12.5 6.5C12.5 5.11929 11.3807 4 10 4C8.61929 4 7.5 5.11929 7.5 6.5C7.5 7.88071 8.61929 9 10 9Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'user-20');
export default IconComponent;
