import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color, ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.37038 3.09565L7.61529 2L7.85943 3.09565C7.87899 3.18086 7.94315 3.24758 8.0261 3.26768L9.09418 3.51848L8.0261 3.77009C7.94315 3.78938 7.87899 3.8561 7.85943 3.94131L7.61529 5.03777L7.37038 3.94131C7.3516 3.8561 7.28665 3.78938 7.20371 3.77009L6.13641 3.51848L7.20371 3.26768C7.28665 3.24758 7.3516 3.18086 7.37038 3.09565ZM3.01505 9.81859L3.17801 9.08813L3.34097 9.81859C3.35351 9.87527 3.39738 9.91908 3.45254 9.93325L4.16456 10.1007L3.45254 10.2682C3.39738 10.2798 3.35351 10.3262 3.34097 10.3816L3.17801 11.1133L3.01505 10.3816C3.00251 10.3262 2.95864 10.2798 2.90348 10.2682L2.19271 10.1007L2.90348 9.93325C2.95864 9.91908 3.00251 9.87527 3.01505 9.81859ZM15.0097 4.02518L14.8467 4.75634C14.8342 4.81336 14.7912 4.85659 14.7348 4.87038L14.0238 5.03777L14.7348 5.20515C14.7912 5.21895 14.8342 5.26309 14.8467 5.31919L15.0097 6.05036L15.1727 5.31919C15.1852 5.26309 15.2291 5.21895 15.2837 5.20515L15.9956 5.03777L15.2837 4.87038C15.2291 4.85659 15.1852 4.81336 15.1727 4.75634L15.0097 4.02518ZM2.26112 2.94567L2.31713 2.95589C2.60329 3.04373 2.68392 3.21965 2.69893 3.70563L2.70162 3.97548L2.69918 4.28051L2.70366 4.51998L2.71323 4.68615L2.72396 4.78333L2.73191 4.81583L2.73947 4.81076L2.78235 4.76273L2.86152 4.65923L2.9761 4.49434L3.2132 4.12168C3.57763 3.54686 3.74246 3.39309 4.07545 3.49475C4.38634 3.59007 4.45588 3.78959 4.46241 4.37381L4.46094 4.82128L4.46586 5.06145L4.47586 5.22794L4.49192 5.34939C4.49337 5.3548 4.49463 5.35761 4.49561 5.35792L4.50323 5.35305L4.54565 5.30666L4.62317 5.20696L4.7344 5.04865L4.89176 4.8042L4.97975 4.66407L5.13545 4.42817C5.39978 4.04827 5.56155 3.95147 5.84371 4.03783C6.10691 4.11873 6.19752 4.27475 6.22343 4.67415L6.2318 4.91714L6.23067 5.36375L6.23576 5.60397L6.25174 5.82728L6.26238 5.89161C6.26388 5.89702 6.2652 5.89983 6.26625 5.90016C6.39671 5.94008 6.47096 6.08107 6.43208 6.21505C6.39321 6.34904 6.25593 6.42529 6.12547 6.38537C5.86229 6.30482 5.77184 6.14954 5.74602 5.75015L5.73769 5.50707L5.73884 5.0594L5.7337 4.81932L5.72342 4.65296L5.7118 4.55571L5.70265 4.52295L5.67769 4.54526L5.61618 4.62013L5.51884 4.75357C5.49967 4.78103 5.47904 4.81117 5.45696 4.84414L5.29334 5.09903C4.88448 5.75624 4.70973 5.95155 4.35444 5.84301C4.09172 5.76196 4.00151 5.60641 3.97601 5.20677L3.96787 4.96357L3.96776 4.38682L3.95982 4.18413L3.94875 4.05286L3.9384 3.98848C3.93695 3.98308 3.9357 3.98027 3.93471 3.97997L3.91023 4.00249L3.84905 4.07756L3.75203 4.21108C3.73292 4.23853 3.71235 4.26867 3.69034 4.30161L3.45318 4.67437L3.28586 4.92749C3.02904 5.29344 2.86824 5.38616 2.59122 5.30106C2.35213 5.22825 2.2561 5.09378 2.222 4.76951L2.20833 4.55115L2.20671 3.84692L2.19926 3.6447L2.1836 3.4734C2.18035 3.45205 2.17758 3.44148 2.17596 3.44098C2.04553 3.40094 1.9714 3.25989 2.01039 3.12594C2.0438 3.01112 2.14947 2.93878 2.26112 2.94567ZM9.79263 3.32987C9.92887 3.08778 10.2304 3.00495 10.4661 3.14488C10.7018 3.2848 10.7825 3.59448 10.6462 3.83657C10.6014 3.91631 10.5597 3.99729 10.5212 4.07947C11.3878 3.70033 12.104 3.6695 12.5247 4.10212C12.6612 4.24096 12.7512 4.41379 12.7987 4.61002L14.9521 9.11901C14.9584 9.13099 14.9642 9.14323 14.9696 9.15571L17.8773 15.2442C17.8965 15.2945 17.9199 15.3705 17.9418 15.4683C18.0425 15.9174 18.0237 16.4056 17.7961 16.8762C17.7036 17.0674 17.5794 17.2454 17.422 17.4072C17.2641 17.5692 17.0898 17.6972 16.9024 17.7923C16.4453 18.0243 15.9712 18.0434 15.5349 17.9405C15.4397 17.9181 15.3659 17.8941 15.2784 17.8572L9.3825 14.8853C9.3746 14.8815 9.36679 14.8776 9.3591 14.8735L4.96604 12.6591C4.77437 12.6111 4.60518 12.5182 4.46908 12.3784C3.73194 11.6213 4.37479 9.93785 5.79773 8.12379C4.94868 7.63034 4.05939 7.52543 3.13875 7.9171C2.88722 8.02411 2.59885 7.90144 2.49466 7.64311C2.39047 7.38478 2.50991 7.08861 2.76144 6.9816C4.07022 6.4248 5.31441 6.61891 6.45154 7.34295C6.63416 7.13773 6.82546 6.93229 7.02462 6.72775C7.77665 5.95538 8.54109 5.29798 9.25956 4.80186C9.29808 4.60027 9.34883 4.39983 9.41267 4.20112C9.50946 3.89982 9.63563 3.60885 9.79263 3.32987ZM9.97179 9.75364C8.80861 10.9488 7.59607 11.8738 6.58548 12.3479L9.61828 13.8771L9.62147 13.8757L9.78378 13.7979C9.87614 13.7505 9.98517 13.69 10.1102 13.6144C10.695 13.2604 11.3671 12.72 12.1133 11.9536C12.8593 11.1878 13.3853 10.4976 13.7296 9.89704C13.7787 9.81142 13.8212 9.73312 13.8577 9.66231L13.95 9.47263C13.9626 9.44483 13.9738 9.41897 13.9838 9.39505L13.9849 9.39218L12.4963 6.27646C12.0349 7.31505 11.1347 8.55985 9.97179 9.75364ZM12.9058 15.5349L10.7227 14.434C11.2946 14.072 11.9981 13.504 12.8104 12.6697C13.622 11.8365 14.1748 11.1145 14.5272 10.5272L15.5982 12.7689L15.5924 12.7928C15.5713 12.8648 15.5384 12.9584 15.4896 13.0716C15.3117 13.4844 15.0026 13.9434 14.5262 14.4327C14.0498 14.9219 13.6029 15.2395 13.2009 15.4221C13.0778 15.4781 12.9786 15.5137 12.9058 15.5349ZM15.2233 15.1487C15.6393 14.7215 15.9459 14.3184 16.1636 13.9524L16.9689 15.6379L16.9737 15.6642L16.9739 15.6652L16.981 15.6955C17.0349 15.9359 17.0249 16.1945 16.9131 16.4257C16.8679 16.5191 16.8062 16.6075 16.7249 16.6912C16.6436 16.7746 16.5571 16.8381 16.4656 16.8845C16.2408 16.9986 15.9893 17.0087 15.7555 16.9536L15.6742 16.9308L14.057 16.1153C14.4138 15.8917 14.8068 15.5765 15.2233 15.1487ZM11.8459 4.87357C11.891 5.12216 11.7752 5.52632 11.5285 6.02206C11.5126 6.05396 11.4962 6.08624 11.4792 6.11888C11.2407 6.57791 10.8967 7.1085 10.4692 7.6633C10.4502 7.60604 10.4308 7.54502 10.4113 7.48048C10.2047 6.79563 10.1093 6.09242 10.17 5.41227L10.189 5.40017L10.4922 5.21552C11.1754 4.8192 11.681 4.66743 11.8291 4.8197L11.8396 4.84416C11.8416 4.85167 11.8437 4.86127 11.8459 4.87357ZM9.73578 8.51241L9.74551 8.53324C9.59465 8.70186 9.43742 8.87046 9.27442 9.03779C9.07747 9.24006 8.87876 9.43367 8.68041 9.61756L8.53328 9.40158C8.2711 9.02986 7.96793 8.65842 7.62589 8.3103C7.50198 8.18419 7.37638 8.0643 7.24917 7.95099C7.40012 7.78172 7.5578 7.61221 7.72182 7.44376C8.20741 6.94503 8.702 6.50333 9.17259 6.12957C9.2012 6.6844 9.30611 7.23847 9.46955 7.7802C9.52621 7.96797 9.58327 8.1327 9.63632 8.27123L9.73578 8.51241ZM7.87904 10.207L7.92199 10.2762C7.03627 10.9941 6.21544 11.481 5.66298 11.6362C5.52271 11.6756 5.39973 11.6936 5.29739 11.6885L5.2227 11.6801L5.22004 11.6796L5.17373 11.6671C5.02877 11.5211 5.14652 11.0632 5.4731 10.4366L5.63849 10.136C5.88469 9.70954 6.21139 9.22488 6.60686 8.71928C6.71597 8.81656 6.82433 8.92007 6.93191 9.02956C7.23305 9.33605 7.50233 9.66597 7.73483 9.99561L7.87904 10.207Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'congratulation');
export default IconComponent;