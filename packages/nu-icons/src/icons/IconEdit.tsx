import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  color = '#595959',
  size = '20',
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
        <mask id="path-1-inside-1_604_2872" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7981 3.19274C19.2027 1.60083 16.6197 1.60083 15.0242 3.19274L13.4949 4.71865L5.36869 12.8268L3.43877 14.7524C3.30594 14.885 3.21309 15.0522 3.17081 15.235L2.27096 19.1257C2.23064 19.246 2.20133 19.3714 2.18423 19.5007L2.04003 20.1241C1.79025 21.2041 2.7578 22.1726 3.83803 21.9239L4.47741 21.7767C4.59953 21.7599 4.71819 21.7323 4.83238 21.6949L8.74179 20.7948C8.92423 20.7528 9.0912 20.6604 9.22373 20.5282L11.1539 18.6023L19.2801 10.4941L20.7981 8.9795C22.3986 7.38257 22.3986 4.78967 20.7981 3.19274ZM6.13952 20.3678L8.51741 19.8203L10.2921 18.0495C10.2379 17.3689 9.91419 16.0431 8.9239 15.055C7.93286 14.0661 6.60252 13.7431 5.92009 13.6893L4.14509 15.4603L3.59657 17.8319C3.78668 17.7732 3.98873 17.7416 4.19819 17.7416C5.32018 17.7416 6.22974 18.6491 6.22974 19.7686C6.22974 19.9772 6.19816 20.1784 6.13952 20.3678ZM15.7305 3.90063C16.9356 2.6982 18.8867 2.6982 20.0918 3.90063C21.3007 5.10686 21.3007 7.06538 20.0918 8.27161L19.2886 9.07299C19.0899 8.21588 18.645 7.12556 17.7564 6.23893C16.8685 5.35295 15.7768 4.90928 14.9185 4.71089L15.7305 3.90063ZM17.0501 6.94683C18.0404 7.93491 18.3641 9.26078 18.4183 9.94137L11.1624 17.1811C10.9637 16.324 10.5188 15.2337 9.63022 14.3471C8.74227 13.4611 7.65062 13.0174 6.79226 12.819L14.0463 5.58112C14.7287 5.63494 16.0591 5.95799 17.0501 6.94683Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7981 3.19274C19.2027 1.60083 16.6197 1.60083 15.0242 3.19274L13.4949 4.71865L5.36869 12.8268L3.43877 14.7524C3.30594 14.885 3.21309 15.0522 3.17081 15.235L2.27096 19.1257C2.23064 19.246 2.20133 19.3714 2.18423 19.5007L2.04003 20.1241C1.79025 21.2041 2.7578 22.1726 3.83803 21.9239L4.47741 21.7767C4.59953 21.7599 4.71819 21.7323 4.83238 21.6949L8.74179 20.7948C8.92423 20.7528 9.0912 20.6604 9.22373 20.5282L11.1539 18.6023L19.2801 10.4941L20.7981 8.9795C22.3986 7.38257 22.3986 4.78967 20.7981 3.19274ZM6.13952 20.3678L8.51741 19.8203L10.2921 18.0495C10.2379 17.3689 9.91419 16.0431 8.9239 15.055C7.93286 14.0661 6.60252 13.7431 5.92009 13.6893L4.14509 15.4603L3.59657 17.8319C3.78668 17.7732 3.98873 17.7416 4.19819 17.7416C5.32018 17.7416 6.22974 18.6491 6.22974 19.7686C6.22974 19.9772 6.19816 20.1784 6.13952 20.3678ZM15.7305 3.90063C16.9356 2.6982 18.8867 2.6982 20.0918 3.90063C21.3007 5.10686 21.3007 7.06538 20.0918 8.27161L19.2886 9.07299C19.0899 8.21588 18.645 7.12556 17.7564 6.23893C16.8685 5.35295 15.7768 4.90928 14.9185 4.71089L15.7305 3.90063ZM17.0501 6.94683C18.0404 7.93491 18.3641 9.26078 18.4183 9.94137L11.1624 17.1811C10.9637 16.324 10.5188 15.2337 9.63022 14.3471C8.74227 13.4611 7.65062 13.0174 6.79226 12.819L14.0463 5.58112C14.7287 5.63494 16.0591 5.95799 17.0501 6.94683Z"
          fill={color}
        />
        <path
          d="M15.0242 3.19274L14.3179 2.48485V2.48485L15.0242 3.19274ZM20.7981 3.19274L21.5044 2.48485V2.48485L20.7981 3.19274ZM13.4949 4.71865L14.2012 5.42655V5.42655L13.4949 4.71865ZM5.36869 12.8268L4.66237 12.1189L5.36869 12.8268ZM3.43877 14.7524L2.73245 14.0445L2.73245 14.0445L3.43877 14.7524ZM3.17081 15.235L2.19653 15.0097H2.19653L3.17081 15.235ZM2.27096 19.1257L3.21918 19.4433L3.23443 19.3978L3.24524 19.351L2.27096 19.1257ZM2.18423 19.5007L3.15851 19.726L3.1693 19.6794L3.17558 19.6319L2.18423 19.5007ZM2.04003 20.1241L3.01431 20.3495L2.04003 20.1241ZM3.83803 21.9239L4.06241 22.8984H4.06241L3.83803 21.9239ZM4.47741 21.7767L4.34152 20.786L4.29691 20.7921L4.25302 20.8022L4.47741 21.7767ZM4.83238 21.6949L4.60799 20.7204L4.564 20.7306L4.52109 20.7446L4.83238 21.6949ZM8.74179 20.7948L8.51741 19.8203L8.51741 19.8203L8.74179 20.7948ZM9.22373 20.5282L9.93004 21.2361L9.93005 21.2361L9.22373 20.5282ZM11.1539 18.6023L11.8602 19.3102L11.1539 18.6023ZM19.2801 10.4941L18.5738 9.78625V9.78625L19.2801 10.4941ZM20.7981 8.9795L21.5044 9.68739V9.68739L20.7981 8.9795ZM6.13952 20.3678L5.18427 20.072L4.67014 21.7323L6.36391 21.3423L6.13952 20.3678ZM8.51741 19.8203L8.74179 20.7948L9.02095 20.7305L9.22373 20.5282L8.51741 19.8203ZM10.2921 18.0495L10.9984 18.7574L11.3256 18.4309L11.2889 17.9702L10.2921 18.0495ZM8.9239 15.055L8.21758 15.7629H8.21758L8.9239 15.055ZM5.92009 13.6893L5.99872 12.6924L5.53971 12.6562L5.21377 12.9814L5.92009 13.6893ZM4.14509 15.4603L3.43877 14.7524L3.23551 14.9553L3.17081 15.235L4.14509 15.4603ZM3.59657 17.8319L2.62229 17.6066L2.23051 19.3006L3.89173 18.7874L3.59657 17.8319ZM20.0918 3.90063L20.7981 3.19274V3.19274L20.0918 3.90063ZM15.7305 3.90063L16.4368 4.60853V4.60853L15.7305 3.90063ZM20.0918 8.27161L20.7981 8.9795V8.9795L20.0918 8.27161ZM19.2886 9.07299L18.3145 9.29889L18.721 11.052L19.9949 9.78088L19.2886 9.07299ZM17.7564 6.23893L18.4627 5.53104L17.7564 6.23893ZM14.9185 4.71089L14.2121 4.00299L12.9338 5.27853L14.6933 5.6852L14.9185 4.71089ZM18.4183 9.94137L19.1246 10.6493L19.4518 10.3228L19.4151 9.862L18.4183 9.94137ZM17.0501 6.94683L17.7564 6.23893L17.0501 6.94683ZM11.1624 17.1811L10.1883 17.407L10.5948 19.1602L11.8687 17.889L11.1624 17.1811ZM9.63022 14.3471L10.3365 13.6392L10.3365 13.6392L9.63022 14.3471ZM6.79226 12.819L6.08594 12.1111L4.80757 13.3867L6.56707 13.7934L6.79226 12.819ZM14.0463 5.58112L14.1249 4.58422L13.6659 4.54801L13.34 4.87323L14.0463 5.58112ZM15.7305 3.90063C16.9356 2.6982 18.8867 2.6982 20.0918 3.90063L21.5044 2.48485C19.5186 0.503457 16.3037 0.50346 14.3179 2.48485L15.7305 3.90063ZM14.2012 5.42655L15.7305 3.90063L14.3179 2.48485L12.7886 4.01076L14.2012 5.42655ZM6.07501 13.5347L14.2012 5.42655L12.7886 4.01076L4.66237 12.1189L6.07501 13.5347ZM4.14509 15.4603L6.07501 13.5347L4.66237 12.1189L2.73245 14.0445L4.14509 15.4603ZM4.14509 15.4603L4.14509 15.4603L2.73245 14.0445C2.4668 14.3096 2.28109 14.6441 2.19653 15.0097L4.14509 15.4603ZM3.24524 19.351L4.14509 15.4603L2.19653 15.0097L1.29668 18.9003L3.24524 19.351ZM3.17558 19.6319C3.18422 19.5666 3.19897 19.5036 3.21918 19.4433L1.32274 18.808C1.26232 18.9884 1.21845 19.1762 1.19287 19.3695L3.17558 19.6319ZM3.01431 20.3495L3.15851 19.726L1.20994 19.2754L1.06575 19.8988L3.01431 20.3495ZM3.61364 20.9494C3.25357 21.0323 2.93105 20.7095 3.01431 20.3495L1.06575 19.8988C0.649444 21.6988 2.26203 23.313 4.06241 22.8984L3.61364 20.9494ZM4.25302 20.8022L3.61364 20.9494L4.06241 22.8984L4.7018 22.7512L4.25302 20.8022ZM4.52109 20.7446C4.46353 20.7635 4.40355 20.7774 4.34152 20.786L4.6133 22.7674C4.79551 22.7424 4.97285 22.7012 5.14367 22.6453L4.52109 20.7446ZM8.51741 19.8203L4.60799 20.7204L5.05676 22.6694L8.96618 21.7693L8.51741 19.8203ZM8.51741 19.8203H8.51741L8.96617 21.7693C9.33105 21.6853 9.665 21.5005 9.93004 21.2361L8.51741 19.8203ZM10.4476 17.8944L8.51741 19.8203L9.93005 21.2361L11.8602 19.3102L10.4476 17.8944ZM18.5738 9.78625L10.4476 17.8944L11.8602 19.3102L19.9864 11.202L18.5738 9.78625ZM20.0918 8.27161L18.5738 9.78625L19.9864 11.202L21.5044 9.68739L20.0918 8.27161ZM20.0918 3.90063C21.3007 5.10686 21.3007 7.06538 20.0918 8.27161L21.5044 9.68739C23.4965 7.69976 23.4965 4.47248 21.5044 2.48485L20.0918 3.90063ZM6.36391 21.3423L8.74179 20.7948L8.29302 18.8458L5.91514 19.3933L6.36391 21.3423ZM9.22373 20.5282L10.9984 18.7574L9.58578 17.3416L7.81109 19.1124L9.22373 20.5282ZM11.2889 17.9702C11.2231 17.1436 10.8443 15.5585 9.63022 14.3471L8.21758 15.7629C8.98407 16.5277 9.25269 17.5943 9.29525 18.1289L11.2889 17.9702ZM9.63022 14.3471C8.41558 13.1351 6.82628 12.7576 5.99872 12.6924L5.84146 14.6862C6.37875 14.7286 7.45014 14.9971 8.21758 15.7629L9.63022 14.3471ZM5.21377 12.9814L3.43877 14.7524L4.85141 16.1682L6.62641 14.3972L5.21377 12.9814ZM3.17081 15.235L2.62229 17.6066L4.57086 18.0573L5.11937 15.6857L3.17081 15.235ZM3.89173 18.7874C3.9873 18.7579 4.0899 18.7416 4.19819 18.7416V16.7416C3.88757 16.7416 3.58607 16.7886 3.30142 16.8765L3.89173 18.7874ZM4.19819 18.7416C4.76999 18.7416 5.22974 19.2035 5.22974 19.7686H7.22974C7.22974 18.0947 5.87037 16.7416 4.19819 16.7416V18.7416ZM5.22974 19.7686C5.22974 19.8758 5.21359 19.9773 5.18427 20.072L7.09477 20.6636C7.18273 20.3795 7.22974 20.0786 7.22974 19.7686H5.22974ZM20.7981 3.19274C19.2027 1.60083 16.6197 1.60083 15.0242 3.19274L16.4368 4.60853C17.2516 3.79557 18.5707 3.79557 19.3855 4.60853L20.7981 3.19274ZM20.7981 8.9795C22.3986 7.38257 22.3986 4.78967 20.7981 3.19274L19.3855 4.60853C20.2028 5.42405 20.2028 6.74819 19.3855 7.56371L20.7981 8.9795ZM19.9949 9.78088L20.7981 8.9795L19.3855 7.56371L18.5823 8.3651L19.9949 9.78088ZM17.0501 6.94683C17.7691 7.66418 18.1445 8.56576 18.3145 9.29889L20.2628 8.8471C20.0353 7.86599 19.521 6.58694 18.4627 5.53104L17.0501 6.94683ZM14.6933 5.6852C15.4283 5.85509 16.3315 6.22986 17.0501 6.94683L18.4627 5.53104C17.4054 4.47605 16.1253 3.96346 15.1437 3.73657L14.6933 5.6852ZM15.0242 3.19274L14.2121 4.00299L15.6248 5.41878L16.4368 4.60853L15.0242 3.19274ZM19.4151 9.862C19.3493 9.0354 18.9705 7.45031 17.7564 6.23893L16.3438 7.65472C17.1103 8.4195 17.3789 9.48615 17.4215 10.0207L19.4151 9.862ZM11.8687 17.889L19.1246 10.6493L17.712 9.23348L10.4561 16.4733L11.8687 17.889ZM8.9239 15.055C9.64286 15.7723 10.0183 16.6739 10.1883 17.407L12.1366 16.9553C11.9091 15.9741 11.3948 14.6951 10.3365 13.6392L8.9239 15.055ZM6.56707 13.7934C7.30213 13.9632 8.20534 14.338 8.9239 15.055L10.3365 13.6392C9.2792 12.5842 7.99911 12.0716 7.01746 11.8447L6.56707 13.7934ZM13.34 4.87323L6.08594 12.1111L7.49858 13.5269L14.7526 6.28901L13.34 4.87323ZM17.7564 6.23893C16.5418 5.02699 14.9525 4.64949 14.1249 4.58422L13.9677 6.57802C14.505 6.6204 15.5763 6.88898 16.3438 7.65472L17.7564 6.23893Z"
          fill={color}
          mask="url(#path-1-inside-1_604_2872)"
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.101 8.2303C17.2969 7.0344 17.2969 5.09547 16.101 3.89958C14.9051 2.70368 12.9662 2.70368 11.7703 3.89958L3.83065 11.8392L3.01517 15.8041C2.87048 16.5075 3.49251 17.1296 4.19601 16.985L8.16137 16.17L16.101 8.2303ZM4.76953 12.345L5.6655 11.4486C6.33926 11.4258 7.09025 11.7115 7.6894 12.3107C8.28944 12.9107 8.57509 13.663 8.55131 14.3375L7.65668 15.2322L6.12136 15.5473C6.1665 15.1745 6.03559 14.7715 5.73413 14.4701C5.361 14.097 4.8324 13.9851 4.39791 14.1449L4.76953 12.345ZM11.4374 5.67442L6.57967 10.5335C7.23345 10.698 7.8745 11.0522 8.41119 11.5889C8.9484 12.1261 9.30272 12.7678 9.46707 13.4223L14.3255 8.56548C14.35 7.89038 14.0644 7.13706 13.4637 6.53635C12.8638 5.93649 12.1118 5.65084 11.4374 5.67442ZM12.4921 4.62136L12.6038 4.51759C13.4058 3.82575 14.6182 3.86034 15.3792 4.62136L15.483 4.73306C16.1749 5.53511 16.1403 6.74749 15.3792 7.50851L15.2414 7.64835C15.0771 6.99378 14.7228 6.35187 14.1855 5.81456C13.6482 5.27732 13.0064 4.92299 12.3519 4.75865L12.4921 4.62136Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'edit');
export default IconComponent;
