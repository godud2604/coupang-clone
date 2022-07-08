import Link from 'next/link';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@components/Button';
import Input from '@components/Input';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  const emailRegister = {
    ...register('email', {
      required: 'required',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: '이메일을 입력하세요.',
      },
    }),
  };

  const passwordRegister = {
    ...register('password', {
      required: true,
      pattern: {
        value: /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,
        message: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
      },
    }),
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="email" register={emailRegister} errors={errors} url="/images/login.svg" />
        <Input label="password" register={passwordRegister} errors={errors} url="/images/password.svg" />

        <Button type="submit" children="로그인" fullWidth />
        <Link href="/auth/signup">
          <Button
            type="button"
            children="회원가입"
            fullWidth
            css={theme => ({
              marginTop: '20px',
              color: theme.blue500,
              backgroundColor: theme.white,
              border: `1px solid ${theme.grey}`,
            })}
          />
        </Link>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
