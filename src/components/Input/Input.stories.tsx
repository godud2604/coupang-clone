import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ margin: 'auto', minWidth: '290px', maxWidth: '460px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  placeholder: 'standard input',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'email',
  icon: '📧',
  placeholder: '아이디(이메일)',
  message: '이메일을 입력하세요',
};

export const Valid = Template.bind({});
Valid.args = {
  icon: '🔒',
  type: 'password',
  placeholder: '비밀번호',
  isValid: true,
  validations: [
    {
      type: 'pattern',
      invalid: false,
      message: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
    },
    {
      type: 'minLength',
      invalid: false,
      message: '비밀번호는 8자 이상이여야 합니다.',
    },
  ],
};

export const Invalid = Template.bind({});
Invalid.args = {
  icon: '🔒',
  type: 'password',
  placeholder: '비밀번호',
  message: '비밀번호 에러',
  validations: [
    {
      type: 'pattern',
      invalid: true,
      message: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
    },
    {
      type: 'minLength',
      invalid: false,
      message: '비밀번호는 8자 이상이여야 합니다.',
    },
  ],
};
