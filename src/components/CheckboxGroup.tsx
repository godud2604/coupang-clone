import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  selectAll: string;
  other: string;
};

const CheckboxGroup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => alert('가입이 완료되었습니다.');
  const selectAll = watch('selectAll');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="checkbox" value="all" {...register('selectAll')} />
        <p>모두 동의합니다.</p>
      </div>
      <div>
        <input
          type="checkbox"
          value="first"
          checked={selectAll}
          {...register('other', { required: { value: true, message: '동의해주세요.' } })}
        />
        <p>[필수] 만 14세 이상입니다.</p>
      </div>
      <div>
        <input
          type="checkbox"
          value="second"
          checked={!(typeof selectAll !== 'string')}
          {...register('other', { required: { value: true, message: '동의해주세요.' } })}
        />
        <p>[필수] 쿠팡 이용약관 동의.</p>
      </div>

      {errors.other && <span>{errors.other.message}</span>}

      <div>
        <input type="submit" value="동의하고 가입하기" />
      </div>
    </form>
  );
};

export default CheckboxGroup;
