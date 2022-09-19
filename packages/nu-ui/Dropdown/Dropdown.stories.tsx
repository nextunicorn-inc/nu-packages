import { Meta } from '@storybook/react';
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
    <div>
      <DropdownMenu
        selectedValue="행사/콘텐츠"
        data={[
          {
            title: '행사/이벤트',
            href: 'https://www.nextunicorn.kr/',
          },
          {
            title: '인사이트/콘텐츠',
            href: 'https://www.nextunicorn.kr/program',
          },
        ]}
      />
    </div>
  );
};
