import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 3H7.5C6.11929 3 5 4.06124 5 5.37034V20.0518C5 20.5755 5.44772 21 6 21C6.22054 21 6.4349 20.9308 6.60971 20.8033L11.6951 17.0943C11.8749 16.9633 12.1251 16.9633 12.3049 17.0943L17.3903 20.8033C17.828 21.1226 18.4559 21.045 18.7926 20.6299C18.9271 20.4642 19 20.2609 19 20.0518V5.37034C19 4.06124 17.8807 3 16.5 3Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'bookmark-24-selected');
export default IconComponent;