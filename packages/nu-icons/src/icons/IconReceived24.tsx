import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4882 2.48822C12.4882 2.21858 12.2696 2 12 2C11.7304 2 11.5118 2.21858 11.5118 2.48822L11.511 11.269L9.58344 9.26461L9.51583 9.20592C9.32555 9.06896 9.06247 9.08853 8.893 9.26461C8.70233 9.46271 8.70233 9.78388 8.893 9.98198L11.6548 12.8514L11.7224 12.9101C11.9127 13.0471 12.1757 13.0275 12.3452 12.8514L15.107 9.98198L15.1635 9.91172C15.2953 9.71403 15.2765 9.4407 15.107 9.26461L15.0394 9.20592C14.8491 9.06896 14.586 9.08853 14.4166 9.26461L12.4886 11.2682L12.4882 2.48822ZM9.49794 4C9.77409 4 9.99794 4.22386 9.99794 4.5C9.99794 4.74546 9.82107 4.94961 9.58782 4.99194L9.49794 5H6.5C6.25454 5 6.05039 5.17688 6.00806 5.41012L6 5.5L6.00105 14.06C6.19077 14.1154 6.36861 14.208 6.52371 14.3333L6.63334 14.4312L8.08057 15.8563C8.15072 15.9253 8.23914 15.9717 8.33434 15.9905L8.43138 16H15.6055C15.7114 16 15.8138 15.9664 15.8985 15.9052L15.9585 15.8541L17.3794 14.4377C17.5513 14.2663 17.7604 14.1409 17.9877 14.0693L17.988 5.5C17.988 5.25454 17.8111 5.05039 17.5779 5.00806L17.488 5H14.5C14.2239 5 14 4.77614 14 4.5C14 4.25454 14.1769 4.05039 14.4101 4.00806L14.5 4H17.488C18.2677 4 18.9084 4.59489 18.9811 5.35554L18.988 5.5L18.9876 12.2931L19.0252 12.3213L19.0607 12.3536L20.8404 14.1337C20.9385 14.2249 21 14.3553 21 14.5V19.5C21 20.2797 20.4051 20.9204 19.6445 20.9931L19.5 21H4.5C3.7203 21 3.07955 20.4051 3.00687 19.6445L3 19.5V14.5C3 14.4538 3.00627 14.4091 3.018 14.3666C3.03865 14.2769 3.08356 14.1913 3.15355 14.1213L4.92132 12.3536C4.94587 12.329 4.97234 12.3075 5.00024 12.2892L5 5.5C5 4.7203 5.59489 4.07955 6.35554 4.00687L6.5 4H9.49794ZM5.58089 15H4V19.5C4 19.7455 4.17688 19.9496 4.41012 19.9919L4.5 20H19.5C19.7455 20 19.9496 19.8231 19.9919 19.5899L20 19.5V15H18.4384C18.3325 15 18.2301 15.0336 18.1454 15.0948L18.0854 15.1459L16.6646 16.5623C16.4185 16.8076 16.0962 16.9587 15.7535 16.9927L15.6055 17H8.43138C8.08679 17 7.75429 16.8814 7.48857 16.6667L7.37893 16.5688L5.93171 15.1437C5.86156 15.0747 5.77314 15.0283 5.67794 15.0095L5.58089 15Z"
        fill="#464646"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'received-24');
export default IconComponent;
