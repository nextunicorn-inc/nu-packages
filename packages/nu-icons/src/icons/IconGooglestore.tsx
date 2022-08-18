import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8384 11.2308L16.4527 8.59L12.721 6.56417C12.721 6.56417 6.63618 3.25417 4.61169 2.14917L13.8402 11.2308H13.8384ZM14.5422 11.8975L17.3169 14.6408C17.7516 14.41 21.1476 12.5642 21.6323 12.3075C22.1441 12.0258 22.0924 11.6408 21.6577 11.4358C21.2554 11.2233 17.8594 9.37333 17.3458 9.07333L14.5387 11.9L14.5422 11.8975ZM13.8402 12.59L16.4265 15.1275L12.7342 17.1275C12.7342 17.1275 8.04108 19.6642 5.45306 21.0758L13.8402 12.59ZM3.05258 2C3.02629 2.0775 3 2.15417 3 2.25667V21.6142C3 21.795 3.05346 21.8975 3.16126 22L13.1645 11.9225L3.05258 2Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'googlestore-24');
export default IconComponent;
