import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';
// {...rest}
// fill={color || '#E40F0F'}
function SvgComponent({ color = '#616161', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.03175 10.0545C7.98415 8.75872 6.6089 7.97924 5.36639 7.66319C4.7451 7.50515 4.17106 7.46656 3.69875 7.52733C3.22143 7.58874 2.88484 7.74585 2.68657 7.94205C2.46922 8.15713 2.42744 8.45223 2.63513 8.83757C2.85016 9.23654 3.30916 9.64945 3.91783 9.89038C4.141 9.97871 4.26992 10.2132 4.22495 10.4489C4.17999 10.6847 3.97383 10.8553 3.73381 10.8553C3.73388 10.8553 3.73386 10.8553 3.73374 10.8553C3.73246 10.8554 3.71971 10.856 3.69486 10.8619C3.66877 10.8681 3.63544 10.8788 3.59678 10.8952C3.51855 10.9284 3.43235 10.9792 3.35396 11.0443C3.19062 11.1801 3.11466 11.3286 3.11466 11.4627C3.11466 11.6977 3.18256 11.8602 3.28375 11.9894C3.3925 12.1283 3.55863 12.252 3.7846 12.3663C4.01072 12.4806 4.26821 12.5718 4.54181 12.6621C4.58385 12.6759 4.62694 12.69 4.67064 12.7042L4.67067 12.7042C4.89451 12.7771 5.13458 12.8554 5.33403 12.9431C5.52032 13.025 5.63836 13.2117 5.63253 13.4151C5.6267 13.6185 5.49815 13.7981 5.30747 13.8692C5.25863 13.8875 5.20739 13.9038 5.16653 13.9168L5.15784 13.9195C5.11705 13.9325 5.08191 13.9437 5.04641 13.956C4.97012 13.9827 4.91717 14.0067 4.87885 14.0316C4.84408 14.0542 4.82884 14.0726 4.81994 14.0884C4.81153 14.1033 4.79338 14.1427 4.79338 14.2314C4.79338 14.4104 4.94986 14.7181 5.39815 15.0902C5.81892 15.4394 6.39672 15.7595 6.98507 15.9774C7.96647 16.3408 9.1076 16.4744 10.3364 16.4966C10.4656 15.8648 10.5573 14.907 10.4581 13.8495C10.3375 12.5637 9.93917 11.177 9.03175 10.0545ZM1.98318 7.23124C2.38662 6.83202 2.9568 6.61454 3.57114 6.5355C4.19049 6.45582 4.89298 6.51092 5.6129 6.69405C7.05281 7.06031 8.61871 7.95302 9.8094 9.42584C10.8794 10.7494 11.3215 12.3465 11.4538 13.7561C11.5857 15.1632 11.4135 16.4298 11.2088 17.1387C11.147 17.3527 10.9512 17.5 10.7284 17.5C9.30871 17.5 7.88848 17.3783 6.63782 16.9152C5.9633 16.6654 5.28206 16.2934 4.75951 15.8597C4.26449 15.4488 3.79338 14.883 3.79338 14.2314C3.79338 13.9953 3.84463 13.7818 3.9492 13.5966C3.96208 13.5738 3.97553 13.5519 3.98947 13.5307C3.77568 13.4558 3.54897 13.3677 3.33328 13.2586C3.03466 13.1076 2.72864 12.9025 2.4964 12.6059C2.25661 12.2997 2.11466 11.9199 2.11466 11.4627C2.11466 10.9659 2.37546 10.5788 2.65754 10.3248C2.27201 10.0382 1.95836 9.68963 1.75484 9.31201C1.40296 8.65911 1.36117 7.84676 1.98318 7.23124ZM14.9682 10.0545C16.0158 8.75872 17.3911 7.97924 18.6336 7.66319C19.2549 7.50515 19.8289 7.46656 20.3012 7.52733C20.7786 7.58874 21.1151 7.74585 21.3134 7.94205C21.5308 8.15713 21.5725 8.45223 21.3649 8.83757C21.1498 9.23654 20.6908 9.64945 20.0822 9.89038C19.859 9.97871 19.7301 10.2132 19.775 10.4489C19.82 10.6847 20.0262 10.8553 20.2662 10.8553C20.2653 10.8553 20.278 10.8554 20.3051 10.8619C20.3312 10.8681 20.3645 10.8788 20.4032 10.8952C20.4814 10.9284 20.5676 10.9792 20.646 11.0443C20.8094 11.1801 20.8853 11.3286 20.8853 11.4627C20.8853 11.6977 20.8174 11.8602 20.7162 11.9894C20.6075 12.1283 20.4414 12.252 20.2154 12.3663C19.9893 12.4806 19.7318 12.5718 19.4582 12.6621C19.4161 12.6759 19.373 12.69 19.3293 12.7042C19.1055 12.7771 18.8654 12.8554 18.666 12.9431C18.4797 13.025 18.3616 13.2117 18.3675 13.4151C18.3733 13.6185 18.5018 13.7981 18.6925 13.8692C18.7414 13.8875 18.7926 13.9038 18.8335 13.9168L18.8421 13.9195C18.8829 13.9325 18.9181 13.9437 18.9536 13.956C19.0299 13.9827 19.0828 14.0067 19.1211 14.0316C19.1559 14.0542 19.1711 14.0726 19.18 14.0884C19.1885 14.1033 19.2066 14.1427 19.2066 14.2314C19.2066 14.4104 19.0501 14.7181 18.6018 15.0902C18.1811 15.4394 17.6033 15.7595 17.0149 15.9774C16.0335 16.3408 14.8924 16.4744 13.6636 16.4966C13.5344 15.8648 13.4427 14.907 13.5419 13.8495C13.6625 12.5637 14.0608 11.177 14.9682 10.0545ZM22.0168 7.23124C21.6134 6.83202 21.0432 6.61454 20.4288 6.5355C19.8095 6.45582 19.107 6.51092 18.3871 6.69405C16.9472 7.06031 15.3813 7.95302 14.1906 9.42584C13.1206 10.7494 12.6785 12.3465 12.5462 13.7561C12.4142 15.1632 12.5865 16.4298 12.7912 17.1387C12.8529 17.3527 13.0488 17.5 13.2715 17.5C14.6913 17.5 16.1115 17.3783 17.3622 16.9152C18.0367 16.6654 18.7179 16.2934 19.2405 15.8597C19.7355 15.4488 20.2066 14.883 20.2066 14.2314C20.2066 13.9953 20.1554 13.7818 20.0508 13.5966C20.0379 13.5738 20.0245 13.5519 20.0105 13.5307C20.2243 13.4558 20.451 13.3677 20.6667 13.2586C20.9653 13.1076 21.2713 12.9025 21.5036 12.6059C21.7434 12.2997 21.8853 11.9199 21.8853 11.4627C21.8853 10.9659 21.6245 10.5788 21.3424 10.3248C21.728 10.0382 22.0416 9.68963 22.2451 9.31201C22.597 8.65911 22.6388 7.84676 22.0168 7.23124Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'angels');
export default IconComponent;
