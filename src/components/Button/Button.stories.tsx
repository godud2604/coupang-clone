import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: 'auto', minWidth: '290px', maxWidth: '460px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: 'Standard',
};

export const NomalButton = Template.bind({});
NomalButton.args = {
  title: '로그인',
  type: 'button',
  colored: true,
};

export const Link = Template.bind({});
Link.args = {
  title: '회원가입',
  to: '/signin',
};

export const Submit = Template.bind({});
Submit.args = {
  title: '동의하고 가입하기',
  type: 'submit',
  colored: true,
};
