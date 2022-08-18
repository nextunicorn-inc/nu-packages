import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1409 4C24.3984 4 30.2818 9.88339 30.2818 17.1409C30.2818 20.5879 28.9547 23.7248 26.7835 26.0687L35.8558 35.141C36.0511 35.3363 36.0511 35.6529 35.8558 35.8481L35.8481 35.8558C35.6529 36.0511 35.3363 36.0511 35.141 35.8558L26.0687 26.7835C23.7248 28.9547 20.5879 30.2818 17.1409 30.2818C9.88339 30.2818 4 24.3984 4 17.1409C4 9.88339 9.88339 4 17.1409 4ZM17.1409 5.01084C10.4417 5.01084 5.01084 10.4417 5.01084 17.1409C5.01084 23.8402 10.4417 29.271 17.1409 29.271C23.8402 29.271 29.271 23.8402 29.271 17.1409C29.271 10.4417 23.8402 5.01084 17.1409 5.01084Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'search-40');
export default IconComponent;
