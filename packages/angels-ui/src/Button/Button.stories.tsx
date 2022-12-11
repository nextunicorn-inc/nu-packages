import Styled from '@emotion/styled';
import Button from './Button';
import { Meta, Story } from '@storybook/react';
import ButtonProps from './Button.types';
import {
  Icon24GreenChatButton, Icon24GreenLikeButton,
  Icon24LiteGrayChatButton, Icon24LiteGrayLikeButton,
  Icon24WhiteChatButton,
  Icon24WhiteLikeButton,
} from './Button.icons';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;
const ButtonCollection = Styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const ButtonRow = Styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  gap: 10px;
`


const ButtonTemplate: Story<ButtonProps> = (args) => (
  <ButtonCollection>
    <ButtonRow>
      <Button {...args} variant="primary" size="small">
        Button
      </Button>
      <Button {...args} variant="secondary" size="small">
        Button
      </Button>
      <Button {...args} variant="linePrimary" size="small">
        Button
      </Button>
      <Button {...args} variant="lineSecondary" size="small">
        Button
      </Button>
    </ButtonRow>
    <ButtonRow>
      <Button {...args} variant="primary" size="medium">
        Button
      </Button>
      <Button {...args} variant="secondary" size="medium">
        Button
      </Button>
      <Button {...args} variant="linePrimary" size="medium">
        Button
      </Button>
      <Button {...args} variant="lineSecondary" size="medium">
        Button
      </Button>
    </ButtonRow>
    <ButtonRow>
      <Button {...args} variant="primary" size="large">
        Button
      </Button>
      <Button {...args} variant="secondary" size="large">
        Button
      </Button>
      <Button {...args} variant="linePrimary" size="large">
        Button
      </Button>
      <Button {...args} variant="lineSecondary" size="large">
        Button
      </Button>
    </ButtonRow>
    <ButtonRow>
      <Button {...args} variant="primary" size="extraLarge">
        Button
      </Button>
      <Button {...args} variant="secondary" size="extraLarge">
        Button
      </Button>
      <Button {...args} variant="linePrimary" size="extraLarge">
        Button
      </Button>
      <Button {...args} variant="lineSecondary" size="extraLarge">
        Button
      </Button>
    </ButtonRow>
    <ButtonRow>
      <Button {...args} variant="primary" size="extraLarge" icon={<Icon24WhiteChatButton/>} isIconAfter>
        Button
      </Button>
      <Button {...args} variant="secondary" size="extraLarge" icon={<Icon24WhiteChatButton/>} isIconAfter={false}>
        Button
      </Button>
      <Button {...args} variant="linePrimary" size="extraLarge" icon={<Icon24GreenChatButton/>} isIconAfter>
        Button
      </Button>
      <Button {...args} variant="lineSecondary" size="extraLarge" icon={<Icon24LiteGrayChatButton/>} isIconAfter={false}>
        Button
      </Button>
    </ButtonRow>
    <ButtonRow>
      <Button {...args} variant="primary" size="extraLarge" icon={<Icon24WhiteLikeButton/>} isIconAfter>
        Button
      </Button>
      <Button {...args} variant="secondary" size="extraLarge" icon={<Icon24WhiteLikeButton/>} isIconAfter={false}>
        Button
      </Button>
      <Button {...args} variant="linePrimary" size="extraLarge" icon={<Icon24GreenLikeButton/>} isIconAfter>
        Button
      </Button>
      <Button {...args} variant="lineSecondary" size="extraLarge" icon={<Icon24LiteGrayLikeButton/>} isIconAfter={false}>
        Button
      </Button>
    </ButtonRow>
  </ButtonCollection>
);

export const Default = ButtonTemplate.bind({});

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  disabled: true,
};
