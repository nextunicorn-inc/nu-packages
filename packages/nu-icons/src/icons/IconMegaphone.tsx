import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  color = '#595959',
  size,
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 3C19.2239 3 19 3.22386 19 3.5V3.80201C18.9313 3.82826 18.8654 3.86531 18.8048 3.91345L17.7516 4.74935C17.1036 5.26365 16.3842 5.68099 15.6161 5.98825C14.8454 6.29656 14.0357 6.49677 13.2101 6.58319L4.50974 7.49391C3.65165 7.58373 3 8.30716 3 9.16994V12.8303C3 13.6929 3.65146 14.4163 4.5094 14.5063L7.74321 14.8454L6.1938 18.6841C6.11288 18.8845 6.0713 19.0986 6.0713 19.3148C6.0713 20.2455 6.82578 21 7.75648 21H8.84698C9.52418 21 10.1356 20.5946 10.3992 19.9709L12.3607 15.3297L13.1781 15.4155C14.011 15.5028 14.8281 15.7036 15.6066 16.0123C16.3813 16.3195 17.1067 16.7389 17.7595 17.257L18.8048 18.0866C18.8642 18.1337 18.9301 18.1711 19 18.1978V18.5C19 18.7761 19.2239 19 19.5 19C19.7761 19 20 18.7761 20 18.5V17.5092V4.49075V3.5C20 3.22386 19.7761 3 19.5 3ZM8.78817 14.955L11.3295 15.2216L9.47811 19.5816C9.37092 19.8352 9.12233 20 8.84698 20H7.75648C7.37806 20 7.0713 19.6932 7.0713 19.3148C7.0713 19.2269 7.08821 19.1399 7.1211 19.0583L8.78817 14.955ZM19 16.965V5.034L18.3732 5.53263C17.6493 6.1072 16.8456 6.57345 15.9875 6.91672C15.6641 7.04611 15.3344 7.15836 15 7.25314V14.752C15.3301 14.8457 15.6556 14.956 15.9752 15.0827C16.841 15.426 17.6517 15.8947 18.3812 16.4737L19 16.965ZM14 14.5221V7.48187C13.7728 7.5217 13.5441 7.5537 13.3142 7.57775L4.61385 8.48848C4.26496 8.525 4 8.81914 4 9.16994V12.8303C4 13.181 4.26488 13.4751 4.61371 13.5117L13.2824 14.4209C13.523 14.4462 13.7623 14.4799 14 14.5221Z"
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
        d="M16.5 2C16.2239 2 16 2.22386 16 2.5V2.76067C15.9469 2.78592 15.8961 2.81832 15.849 2.858L14.997 3.5758C14.4864 4.00602 13.9144 4.35746 13.2998 4.61844C12.6838 4.88001 12.0331 5.05043 11.368 5.12434L4.33433 5.90595C3.57469 5.99036 3 6.63246 3 7.39677V10.6056C3 11.3698 3.57451 12.0119 4.33401 12.0964L6.35424 12.3214L5.01913 15.9866C4.9592 16.1511 4.92854 16.3249 4.92854 16.5C4.92854 17.3284 5.60011 18 6.42854 18H7.31114C7.93333 18 8.49093 17.6159 8.71266 17.0345L10.341 12.7653L11.342 12.8767C12.0131 12.9515 12.67 13.1224 13.2924 13.3844C13.9122 13.6453 14.489 13.9984 15.0033 14.4317L15.849 15.1442C15.8953 15.1832 15.9461 15.2158 16 15.2414V15.5C16 15.7761 16.2239 16 16.5 16C16.7761 16 17 15.7761 17 15.5V14.6089V3.39332V2.5C17 2.22386 16.7761 2 16.5 2ZM7.38004 12.4356L9.31461 12.651L7.77831 16.6782C7.7044 16.872 7.51854 17 7.31114 17H6.42854C6.1524 17 5.92854 16.7761 5.92854 16.5C5.92854 16.4416 5.93876 16.3837 5.95874 16.3289L7.38004 12.4356ZM16 13.964V4.037L15.6414 4.34054C15.0545 4.83501 14.397 5.23892 13.6907 5.53889C13.4643 5.63502 13.2338 5.7204 13 5.79482V12.2119C13.2302 12.2851 13.4572 12.3688 13.6803 12.4627C14.393 12.7627 15.0563 13.1687 15.6476 13.6669L16 13.964ZM12 11.963V6.04255C11.8272 6.07355 11.6532 6.0988 11.4784 6.11822L4.44478 6.89983C4.19156 6.92797 4 7.142 4 7.39677V10.6056C4 10.8604 4.1915 11.0744 4.44467 11.1026L11.4527 11.8829C11.6362 11.9033 11.8187 11.93 12 11.963Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'megaphone');
export default IconComponent;
