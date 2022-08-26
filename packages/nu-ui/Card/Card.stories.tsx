import { Story, Meta } from '@storybook/react';
import Card from './Card';
import CardProps from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '(주) 하프스',
  description:
    '주식회사 하프스는 빅데이터 기술을 기반으로 스타트업과 투자자 연결하는 온라인 플랫폼입니당',
  tags: [
    { name: '제조업', link: 'http://localhost:3000' },
    { name: '클라우드', link: 'http://localhost:3000' },
    { name: '제조업', link: 'http://localhost:3000' },
  ],
  viewCount: 99999,
  isInvest: true,
};
