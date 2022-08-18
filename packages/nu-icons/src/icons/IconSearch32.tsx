import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1466 2C19.3027 2 24.2932 6.99051 24.2932 13.1466C24.2932 16.0424 23.189 18.6802 21.3786 20.6621L29.8563 29.1398C30.0516 29.3351 30.0516 29.6516 29.8563 29.8469L29.8469 29.8563C29.6516 30.0516 29.3351 30.0516 29.1398 29.8563L20.6621 21.3786C18.6802 23.189 16.0424 24.2932 13.1466 24.2932C6.99051 24.2932 2 19.3027 2 13.1466C2 6.99051 6.99051 2 13.1466 2ZM13.1466 3.01333C7.55015 3.01333 3.01333 7.55015 3.01333 13.1466C3.01333 18.7431 7.55015 23.2799 13.1466 23.2799C18.7431 23.2799 23.2799 18.7431 23.2799 13.1466C23.2799 7.55015 18.7431 3.01333 13.1466 3.01333Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'search-32');
export default IconComponent;
