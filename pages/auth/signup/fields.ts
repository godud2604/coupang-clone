import CheckboxGroup from '@components/CheckboxGroup/CheckboxGroup';
import Input from '@components/Input/Input';
import { ComponentProps } from 'react';
import { Path } from 'react-hook-form';

import { SignupAgreements as CheckFields } from '../../../src/services/auth.service';

export interface IInput extends ComponentProps<typeof Input> {
  name: keyof SignupForm;
}

export interface ICheck<TForm> extends ComponentProps<typeof CheckboxGroup> {
  name: Path<TForm>;
}

//
export type SignupForm = InputFields & CheckFields;

type InputFields = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phoneNumber: string;
};

export const inputFields: IInput[] = [
  { icon: '📧', name: 'email', type: 'email', placeholder: '아이디(이메일)' },
  { icon: '🔒', name: 'password', type: 'password', placeholder: '비밀번호' },
  {
    icon: '🔓',
    name: 'passwordCheck',
    type: 'text',
    placeholder: '비밀번호 확인',
  },
  { icon: '👤', name: 'name', type: 'text', placeholder: '이름' },
  { icon: '📱', name: 'phoneNumber', type: 'text', placeholder: '휴대폰 번호' },
];

export const checkboxFields: ICheck<SignupForm>[] = [
  {
    name: 'terms_fourteen',
    title: '[필수] 만 14세 이상입니다',
    required: true,
  },
  {
    name: 'terms_service',
    title: '[필수] 쿠팡 이용약관 동의',
    description: 'sdf',
    required: true,
  },
  {
    name: 'terms_commerce',
    title: '[필수] 전자금융거래 이용약관 동의',
    description: 'dd',
    required: true,
  },
  {
    name: 'terms_privacy_collect_use',
    title: '[필수] 개인정보 수집 및 이용 동의',
    description: 'dd',
    required: true,
  },
  {
    name: 'terms_privacy_collect_use',
    title: '[필수] 개인정보 제3자 제공 동의',
    description: 'dd',
    required: true,
  },
  {
    name: 'agree_to_collect_third_part_information',
    title: '[선택] 광고성 목적의 개인정보 수집 및 이용 동의',
    description: 'dd',
    required: false,
  },
  {
    name: 'agree_to_collect_for_ads',
    title: '[선택] 광고성 정보 수신 동의',
    description: 'dd',
    required: false,
  },
  {
    name: 'agree_to_receive_email',
    title: '[선택] 이메일 수신 동의',
    required: false,
    isChild: true,
  },
  {
    name: 'agree_to_receive_sms',
    title: '[선택] SMS,MMS 수신 동의',
    required: false,
    isChild: true,
  },
  {
    name: 'agree_to_receive_push',
    title: '[선택] 앱 푸시 수신 동의',
    required: false,
    isChild: true,
  },
];

export const checkParent: string[] = [
  'agree_to_collect_for_ads',
  'agree_to_collect_third_part_information',
];

export const checkChild: string[] = checkboxFields
  .filter((i) => !i.required)
  .map((i) => i.name);
