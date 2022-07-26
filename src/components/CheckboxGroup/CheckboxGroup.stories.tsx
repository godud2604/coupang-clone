import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckboxGroup from './CheckboxGroup';
import { useForm } from 'react-hook-form';
import { checkboxFields, SignupForm } from '@pages/auth/signup/fields';

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
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
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup<SignupForm>> = (args) =>{
  const {register} = useForm<SignupForm>()
  
  return (
  <CheckboxGroup<SignupForm> {...args} 
  register={register}
  />
)};

export const Standard = Template.bind({});
Standard.args = {
  fields:checkboxFields,

};