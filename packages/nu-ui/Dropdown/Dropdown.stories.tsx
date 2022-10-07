import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import { Color } from '../@foundations';
import DropdownMenu from './Dropdown';
import Dropdown from './Dropdown';

export default {
  title: 'Components/DropdownMenu',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (
    <>
      <div>
        <DropdownMenu
          selectedValue={
            <span
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: Color.angelsGray1,
              }}
            ></span>
          }
          data={[
            {
              title: '행사/이벤트',
              href: 'https://www.nextunicorn.kr/',
              target: '_blank',
            },
            {
              title: '인사이트/콘텐츠',
              href: 'https://www.nextunicorn.kr/program',
            },
          ]}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 18px 0 18px',
            }}
          >
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: Color.angelsGray1,
              }}
            ></span>
            <span>박아리님</span>
          </div>
        </DropdownMenu>
      </div>
      <div>
        <DropdownMenu
          cx={css`
            button:hover {
              background-color: unset;
            }
          `}
          selectedValue="행사/콘텐츠"
          data={[
            {
              title: '행사/이벤트',
              href: 'https://www.nextunicorn.kr/',
            },
            {
              title: '인사이트/콘텐츠',
              onClick: () => alert(),
            },
          ]}
        />
      </div>
    </>
  );
};
