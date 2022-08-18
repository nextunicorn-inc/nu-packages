import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  color = '#595959',
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
          d="M7.5 3.5H16.5C17.63 3.5 18.5 4.36214 18.5 5.37034V20.0518C18.5 20.1437 18.4682 20.2362 18.4043 20.3149C18.239 20.5186 17.9125 20.5653 17.6849 20.3994L12.5995 16.6904C12.2442 16.4313 11.7558 16.4313 11.4005 16.6904L6.31508 20.3994C6.22759 20.4632 6.11684 20.5 6 20.5C5.69843 20.5 5.5 20.2746 5.5 20.0518V5.37034C5.5 4.36214 6.37001 3.5 7.5 3.5Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8571 3H6.14286C5.49568 3 5 3.51146 5 4.10697V16.8586L9.13546 13.7307C9.64638 13.3443 10.3536 13.3443 10.8645 13.7307L15 16.8586V4.10697C15 3.51146 14.5043 3 13.8571 3ZM6.14286 2H13.8571C15.0406 2 16 2.94332 16 4.10697V17.1572C16 17.343 15.9375 17.5237 15.8222 17.671C15.5336 18.04 14.9955 18.109 14.6202 17.8252L10.2613 14.5283C10.1073 14.4118 9.89275 14.4118 9.7387 14.5283L5.37975 17.8252C5.22992 17.9385 5.04618 18 4.85714 18C4.38376 18 4 17.6226 4 17.1572V4.10697C4 2.94332 4.95939 2 6.14286 2Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'bookmark-deselected');
export default IconComponent;
