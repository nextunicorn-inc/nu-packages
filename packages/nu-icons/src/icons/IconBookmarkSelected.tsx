import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  color = '#616161',
  size = '20',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
  if (size === '24') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 3H7.5C6.11929 3 5 4.06124 5 5.37034V20.0518C5 20.5755 5.44772 21 6 21C6.22054 21 6.4349 20.9308 6.60971 20.8033L11.6951 17.0943C11.8749 16.9633 12.1251 16.9633 12.3049 17.0943L17.3903 20.8033C17.828 21.1226 18.4559 21.045 18.7926 20.6299C18.9271 20.4642 19 20.2609 19 20.0518V5.37034C19 4.06124 17.8807 3 16.5 3Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8571 2H6.14286C4.95939 2 4 2.94332 4 4.10697V17.1572C4 17.6226 4.38376 18 4.85714 18C5.04618 18 5.22992 17.9385 5.37975 17.8252L9.7387 14.5283C9.89275 14.4118 10.1073 14.4118 10.2613 14.5283L14.6202 17.8252C14.9955 18.109 15.5336 18.04 15.8222 17.671C15.9375 17.5237 16 17.343 16 17.1572V4.10697C16 2.94332 15.0406 2 13.8571 2Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'bookmark-selected');
export default IconComponent;
