import React from 'react';
import {convertIcon} from '../component/Icon';

interface OverrideIconSize24 {
    size: '24';
}

type OverrideIconSize = OverrideIconSize24;

const SvgComponent = ({
                          size,
                      }: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
    if (size === '24') {
        return (<svg fill="none"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m20.632 21.368c0.2031 0.2031 0.5323 0.2031 0.7354 0s0.2031-0.5323 0-0.7354l-0.7354 0.7354zm-4-4 4 4 0.7354-0.7354-4-4-0.7354 0.7354z"
                    fill="#616161"/>
                <circle cx="10.756" cy="10.756" r="8.7557" stroke="#616161" strokeWidth="1.03997"/>
                <circle cx="10.756" cy="6.9503" r="2.0814" stroke="#616161" strokeWidth="0.991656"/>
                <path
                    d="m6.4648 15.245v-0.9816c0-2.6177 1.9211-4.7397 4.2909-4.7397 2.3699 0 4.291 2.122 4.291 4.7397v0.9816"
                    stroke="#616161" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.991656"/>
            </svg>);
    }
    return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#616161
 * 사용가능한 사이즈는 24 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'HRSearch');
export default IconComponent;
