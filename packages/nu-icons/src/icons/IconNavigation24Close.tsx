import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8473 3.15269C21.0509 3.35629 21.0509 3.68638 20.8473 3.88997L12.7373 12L20.8473 20.11C21.0509 20.3136 21.0509 20.6437 20.8473 20.8473C20.6437 21.0509 20.3136 21.0509 20.11 20.8473L12 12.7373L3.88997 20.8473C3.68638 21.0509 3.35629 21.0509 3.15269 20.8473C2.9491 20.6437 2.9491 20.3136 3.15269 20.11L11.2627 12L3.15269 3.88997C2.9491 3.68638 2.9491 3.35629 3.15269 3.15269C3.35629 2.9491 3.68638 2.9491 3.88997 3.15269L12 11.2627L20.11 3.15269C20.3136 2.9491 20.6437 2.9491 20.8473 3.15269Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'navigation-24-close');
export default IconComponent;
