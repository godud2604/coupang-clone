import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: 'auto',
          marginTop: '10px',
          minWidth: '290px',
          maxWidth: '460px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  title: '[필수] 만 14세 이상입니다',
};

export const Bold = Template.bind({});
Bold.args = {
  title: '모두 동의합니다.',
  bold: true,
};

export const Description = Template.bind({});
Description.args = {
  title: '[선택] 광고성 정보 수신 동의',
  description: 'description',
};

export const Child = Template.bind({});
Child.args = {
  title: '[선택] 이메일 수신 동의',
  isChild: true,
};
