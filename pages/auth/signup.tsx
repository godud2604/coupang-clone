import Select from '@components/CheckboxGroup';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  passwordConfirm: string;
  name: string;
  phoneNum: string;
  requireSelect: string;
  optionSelect: string;
};

export const REQUIRE_DATA = [
  { comment: "[필수] 만 14세 이상입니다." },
  { comment: "[필수] 쿠팡 이용약관 동의" },
  { comment: "[필수] 전자금융거래 이용약관 동의" },
  { comment: "[필수] 개인정보 수집 및 이용 동의" },
  { comment: "[필수] 개인정보 제 3자 제공 동의" },
];
export const OPTION_DATA = [
  { comment: "[선택] 광고성 목적의 개인정보 수집 및 이용 동의" },
  { comment: "[선택] 이메일 수신 동의" },
  { comment: "[선택] SMS,MMS 수신 동의" },
  { comment: "[선택] 앱 푸시 수신 동의" },
];

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  const requireSelect = register("requireSelect", {
    validate: (v) =>
      v.length === REQUIRE_DATA.length || "필수 항목에 모두 동의해주세요",
  });
  const optionSelect = register("optionSelect");

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

      <SSelect>
        <Select {...requireSelect} data={REQUIRE_DATA} />

        <Select {...optionSelect} data={OPTION_DATA} />
        {errors.requireSelect && <span>{errors.requireSelect.message}</span>}
      </SSelect>
      </form>


    </Wrapper>
  );
}

const Wrapper = styled.div``;


export const SSelect = styled.div`
  padding: 18px 16px;
  border: 1px solid #ccc;
  width: 100%;
  overflow: hidden;
`;