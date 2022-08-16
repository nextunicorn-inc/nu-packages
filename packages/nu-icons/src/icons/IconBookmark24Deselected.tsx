import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 3.5H16.5C17.63 3.5 18.5 4.36214 18.5 5.37034V20.0518C18.5 20.1437 18.4682 20.2362 18.4043 20.3149C18.239 20.5186 17.9125 20.5653 17.6849 20.3994L12.5995 16.6904C12.2442 16.4313 11.7558 16.4313 11.4005 16.6904L6.31508 20.3994C6.22759 20.4632 6.11684 20.5 6 20.5C5.69843 20.5 5.5 20.2746 5.5 20.0518V5.37034C5.5 4.36214 6.37001 3.5 7.5 3.5Z"
        stroke="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'bookmark-24-deselected');
export default IconComponent;
