import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color, size = '20', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM12 7C11.4596 7 11.0327 7.45846 11.0712 7.99746L11.4644 13.5013C11.4844 13.7823 11.7183 14 12 14C12.2817 14 12.5156 13.7823 12.5356 13.5013L12.9288 7.99746C12.9673 7.45846 12.5404 7 12 7ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          fill={color || '#595959'}
        />
      </svg>
    );
  }

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.0995 6.99504C9.04623 6.46229 9.46459 6 10 6C10.5354 6 10.9538 6.46228 10.9005 6.99504L10.5498 10.5025C10.5215 10.7849 10.2838 11 10 11C9.71616 11 9.47849 10.7849 9.45025 10.5025L9.0995 6.99504ZM10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14Z"
        fill={color || '#E40F0F'}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'alert');
export default IconComponent;
