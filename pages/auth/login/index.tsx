import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import styled from '@emotion/styled';
import { useForm, SubmitHandler, Path, RegisterOptions } from 'react-hook-form';

type FormFields = {
  email: string;
  password: string;
  checkbox: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  const validation: { [key in Path<FormFields>]: RegisterOptions } = {
    email: {
      required: '아이디를 입력해주세요.',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
        message: '아이디(이메일)는 이메일 형식으로 입력해주세요.',
      },
    },
    password: {
      required: '비밀번호를 입력해주세요.',
      minLength: {
        value: 8,
        message: '비밀번호는 8자 이상이여야 합니다,',
      },
    },
    checkbox: {},
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', validation.email)}
        icon="📧"
        type="email"
        placeholder="아이디(이메일)"
        message={errors.email?.message}
      />
      <Input
        {...register('password', validation.password)}
        icon="🔒"
        type="password"
        placeholder="비밀번호"
        message={errors.password?.message}
      />

      <Utils>
        <label>
          <input type="checkbox" {...register('checkbox')} />
          <p>자동로그인</p>
        </label>
        <a href="/auth/find">아이디(이메일)/비밀번호 찾기 〉 </a>
      </Utils>

      <Button type="submit" title="로그인" colored />
      <hr />
      <Button to="/auth/signup" title="회원가입" />
    </Form>
  );
}

const Form = styled.form`
  hr {
    margin: 18px 0;
    border: 0;
    border-top: 1px solid #ddd;
  }
`;

const Utils = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 14px;

  label {
    display: flex;
    font-size: 14px;
    line-height: 24px;
    color: #555;

    p {
      margin: 0;
      margin-left: 5px;
    }
  }

  a {
    color: #0073e9;
    font-size: 14px;
    line-height: 24px;
  }
`;
