import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#595959', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.73261 3.05789L6.8772 3.09041L16.0275 5.54239L16.1987 6.00169C16.3599 6.43416 16.7039 6.75874 17.1419 6.87609C17.5312 6.98041 17.9381 6.90582 18.2736 6.68151L18.3959 6.59044L18.7738 6.27829L20.6035 6.76836C21.5661 7.0263 22.145 8.02223 21.951 9.03814L21.916 9.19059L21 12.6057V18C21 19.0544 20.1841 19.9182 19.1493 19.9946L19 20.0001H17.0007L16.7006 19.6006C16.4182 19.2245 15.9787 19 15.5 19C15.0745 19 14.68 19.1774 14.3992 19.481L14.2994 19.6006L13.9993 20.0001H4C2.94564 20.0001 2.08183 19.1841 2.00549 18.1493L2 18V11C2 10.1428 2.53934 9.41148 3.29721 9.12698L4.52937 4.53185C4.78731 3.56921 5.66823 2.94975 6.5804 3.03678L6.73261 3.05789ZM13.4999 10.0002L4 10C3.48716 10 3.06449 10.386 3.00673 10.8834L3 11V18C3 18.5128 3.38604 18.9356 3.88338 18.9933L4 19.0001H13.4998C13.9559 18.3928 14.6821 18 15.5 18C16.255 18 16.9319 18.3347 17.3902 18.8638L17.5002 19.0001H19C19.5128 19.0001 19.9355 18.614 19.9933 18.1166L20 18V11C20 10.4872 19.614 10.0645 19.1166 10.0067L19 10L17.5001 10.0002C17.044 10.6073 16.3178 11 15.5 11C14.7451 11 14.0683 10.6654 13.6099 10.1364L13.4999 10.0002ZM10 16.5C10 16.2239 9.77614 16 9.5 16H5.5C5.22386 16 5 16.2239 5 16.5C5 16.7761 5.22386 17 5.5 17H9.5C9.77614 17 10 16.7761 10 16.5ZM15.5 16C15.7761 16 16 16.2239 16 16.5C16 16.7761 15.7761 17 15.5 17C15.2239 17 15 16.7761 15 16.5C15 16.2239 15.2239 16 15.5 16ZM12 14.5C12 14.2239 11.7761 14 11.5 14H5.5C5.22386 14 5 14.2239 5 14.5C5 14.7761 5.22386 15 5.5 15H11.5C11.7761 15 12 14.7761 12 14.5ZM15.5 14C15.7761 14 16 14.2239 16 14.5C16 14.7761 15.7761 15 15.5 15C15.2239 15 15 14.7761 15 14.5C15 14.2239 15.2239 14 15.5 14ZM16 12.5C16 12.2239 15.7761 12 15.5 12C15.2239 12 15 12.2239 15 12.5C15 12.7761 15.2239 13 15.5 13C15.7761 13 16 12.7761 16 12.5ZM11.5 12C11.7761 12 12 12.2239 12 12.5C12 12.7761 11.7761 13 11.5 13H5.5C5.22386 13 5 12.7761 5 12.5C5 12.2239 5.22386 12 5.5 12H11.5ZM5.4953 4.79068L5.5316 4.67967L5.57865 4.57563C5.78721 4.17416 6.23286 3.95303 6.66322 4.06835L15.2996 6.38262L15.3643 6.54099C15.6442 7.16363 16.1728 7.65171 16.8591 7.83561C17.6026 8.03483 18.3644 7.83237 18.9362 7.35703L20.2998 7.72226L20.4041 7.75717C20.8413 7.93411 21.0828 8.43642 20.9501 8.93178L20.6854 9.92277C20.33 9.36782 19.7079 9.00001 19 9.00001L17.0005 9.00021L16.7005 9.39952L16.6007 9.51915C16.3199 9.82265 15.9254 10 15.5 10C15.0214 10 14.5819 9.77554 14.2995 9.39952L13.9994 9.00016L4.367 8.99966L5.4953 4.79068Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'myTicket');
export default IconComponent;