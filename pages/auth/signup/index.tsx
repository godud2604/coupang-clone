import Button from '@components/Button/Button';
import CheckboxGroup from '@components/CheckboxGroup/CheckboxGroup';
import Input from '@components/Input/Input';
import styled from '@emotion/styled';
import {
  useForm,
  SubmitHandler,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

import { SignupForm, checkboxFields, inputFields } from './fields';

export default function SignupPage() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<SignupForm>({
    mode: 'onChange',
  });

  const password = watch('password');

  const validation: { [name in Path<SignupForm>]?: RegisterOptions } = {
    email: {
      required: '아이디를 입력해주세요.',
      pattern: {
        value: /^[^\!@]+@[^\s@]+\.[^\s@]{2,}$/i,
        message: '아이디(이메일)는 이메일 형식으로 입력해주세요.',
      },
    },
    password: {
      required: '비밀번호를 입력해주세요.',
      minLength: {
        value: 8,
        message: '비밀번호는 8자 이상이여야 합니다.',
      },
      pattern: {
        value: /(?=.*\d)(?=.*[a-z]).{8,}/,
        message: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
      },
    },
    passwordCheck: {
      required: '확인을 위해 새 비밀번호를 다시 입력해주세요.',
      validate: (value) =>
        password === value || '비밀번호가 동일하지 않습니다.',
    },
    name: {
      required: '이름을 정확히 입력하세요.',
    },
    phoneNumber: {
      required: '휴대폰 번호를 정확하게 입력하세요.',
    },
  };

  const pwValidations = [
    {
      type: 'pattern',
      invalid: errors.password?.type === 'pattern',
      message: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
    },
    {
      type: 'minLength',
      invalid: errors.password?.type === 'minLength',
      message: '비밀번호는 8자 이상이여야 합니다.',
    },
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data); //

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <h1>회원정보를 입력해주세요</h1>
        {inputFields.map((i, index) => (
          <li key={index}>
            <Input
              {...register(i.name, validation[i.name])}
              icon={i.icon}
              type={i.type}
              placeholder={i.placeholder}
              message={errors[i.name]?.message}
              isValid={touchedFields[i.name] && !errors[i.name] ? true : false}
              validations={
                i.name === 'password' && touchedFields.password
                  ? pwValidations
                  : undefined
              }
            />
          </li>
        ))}
      </InputGroup>
      <Section>
        <h1>쿠팡 서비스약관에 동의해주세요 </h1>
        <CheckboxGroup<SignupForm> //
          fields={checkboxFields}
          register={register}
        />
      </Section>
      <Button title="동의하고 가입하기" type="submit" colored />
    </form>
  );
}

const InputGroup = styled.section`
  h1 {
    padding: 20px 0 10px 0;
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    color: #111;
  }
`;

const Section = styled.section`
  margin-top: 20px;
  border-top: 1px solid #f1f4f6;

  h1 {
    padding: 20px 0 17px 0;
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    color: #111;
  }
`;
