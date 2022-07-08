import CheckboxGroup from '@components/CheckboxGroup';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  passwordConfirm: string;
  name: string;
  phoneNum: string;
};

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>PasswordConfirm</label>
        <input {...register('passwordConfirm', { required: true })} />
        {errors.passwordConfirm && <p>확인을 위해 새 비밀번호를 다시 입력해주세요.</p>}
        <label>Name</label>
        <input {...register('name', { required: true })} />
        {errors.name && <p>이름을 정확히 입력하세요.</p>}
        <label>PhoneNum</label>
        <input {...register('phoneNum', { required: true })} />
        {errors.phoneNum && <p>휴대폰 번호를 정확하게 입력하세요.</p>}
      </form>

      <CheckboxGroup />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
