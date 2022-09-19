import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import Button from './Button';
import { Icon20Share, Icon24NUUser, Icon20BookmarkSelected } from './Button.icons';

import type { ButtonProps } from './Button.types';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const Template: Story<ButtonProps> = (args) => (
  <Layout>
    <Row>
      <Button {...args} variant="primary" size="large">
        텍스트 버튼
      </Button>
      <Button {...args} variant="secondary" size="large">
        텍스트 버튼
      </Button>
      <Button {...args} variant="tertiary" size="large">
        텍스트 버튼
      </Button>
    </Row>
    <Row style={{ marginBottom: '1em' }}>
      <Button {...args} variant="angels-primary" size="large">
        텍스트 버튼
      </Button>
      <Button {...args} variant="angels-secondary" size="large">
        텍스트 버튼
      </Button>
      <Button {...args} variant="angels-tertiary" size="large">
        텍스트 버튼
      </Button>
    </Row>

    <Row>
      <Button
        {...args}
        variant="primary"
        size="large"
        text="NU User 버튼"
        icon={Icon24NUUser}
        isIconAfter
      />
      <Button
        {...args}
        variant="secondary"
        size="large"
        text="북마크 버튼"
        icon={Icon20BookmarkSelected}
        isIconAfter
      />
      <Button
        {...args}
        variant="tertiary"
        size="large"
        text="공유하기 버튼"
        icon={Icon20Share}
        isIconAfter
      />
    </Row>
    <Row style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant="angels-primary"
        size="large"
        text="NU User 버튼"
        icon={Icon24NUUser}
        isIconAfter
      />
      <Button
        {...args}
        variant="angels-secondary"
        size="large"
        text="북마크 버튼"
        icon={Icon20BookmarkSelected}
        isIconAfter
      />
      <Button
        {...args}
        variant="angels-tertiary"
        size="large"
        text="공유하기 버튼"
        icon={Icon20Share}
        isIconAfter
      />
    </Row>

    <Row>
      <Button {...args} variant="primary" size="large" text="NU User 버튼" icon={Icon24NUUser} />
      <Button
        {...args}
        variant="secondary"
        size="large"
        text="북마크 버튼"
        icon={Icon20BookmarkSelected}
      />
      <Button {...args} variant="tertiary" size="large" text="공유하기 버튼" icon={Icon20Share} />
    </Row>
    <Row style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant="angels-primary"
        size="large"
        text="NU User 버튼"
        icon={Icon24NUUser}
      />
      <Button
        {...args}
        variant="angels-secondary"
        size="large"
        text="북마크 버튼"
        icon={Icon20BookmarkSelected}
      />
      <Button
        {...args}
        variant="angels-tertiary"
        size="large"
        text="공유하기 버튼"
        icon={Icon20Share}
      />
    </Row>

    <Row style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant="primary"
        size="large"
        text="NU User 버튼"
        icon={Icon24NUUser}
        isIconOnly
      />
      <Button
        {...args}
        variant="secondary"
        size="large"
        text="북마크 버튼"
        icon={Icon20BookmarkSelected}
        isIconOnly
      />
      <Button
        {...args}
        variant="tertiary"
        size="large"
        text="공유하기 버튼"
        icon={Icon20Share}
        isIconOnly
      />
      <Button
        {...args}
        variant="angels-primary"
        size="large"
        text="NU User 버튼"
        icon={Icon24NUUser}
        isIconOnly
      />
      <Button
        {...args}
        variant="angels-secondary"
        size="large"
        text="북마크 버튼"
        icon={Icon20BookmarkSelected}
        isIconOnly
      />
      <Button
        {...args}
        variant="angels-tertiary"
        size="large"
        text="공유하기 버튼"
        icon={Icon20Share}
        isIconOnly
      />
    </Row>

    <Row>
      <Button
        {...args}
        variant="primary"
        size="large"
        text="로딩 버튼"
        icon={Icon24NUUser}
        isIconOnly
        loading
      />
      <Button
        {...args}
        variant="secondary"
        size="large"
        text="로딩 버튼"
        icon={Icon20BookmarkSelected}
        isIconOnly
        loading
      />
      <Button
        {...args}
        variant="tertiary"
        size="large"
        text="로딩 버튼"
        icon={Icon20Share}
        isIconOnly
        loading
      />
      <Button
        {...args}
        variant="angels-primary"
        size="large"
        text="로딩 버튼"
        icon={Icon24NUUser}
        isIconOnly
        loading
      />
      <Button
        {...args}
        variant="angels-secondary"
        size="large"
        text="로딩 버튼"
        icon={Icon20BookmarkSelected}
        isIconOnly
        loading
      />
      <Button
        {...args}
        variant="angels-tertiary"
        size="large"
        text="로딩 버튼"
        icon={Icon20Share}
        isIconOnly
        loading
      />
    </Row>
  </Layout>
);

export const DefaultAndHover = Template.bind({});

export const DefaultAndHoverIsBlock = Template.bind({});
DefaultAndHoverIsBlock.args = {
  isBlock: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
