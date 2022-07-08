import styled from '@emotion/styled';
import Image from 'next/image';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: any;
  errors: any;
  url: string;
}

const Input = (props: Props) => {
  const { label, register, errors, url, ...rest } = props;

  return (
    <>
      <Label>
        <i className="label-icon">
          <Image src={url} alt="입력" width="25" height="25" />
        </i>
        <span className={errors[label] ? 'label-input-wrap-error' : 'label-input-wrap'}>
          <input {...register} {...rest} />
        </span>
      </Label>
      {errors[label] && (
        <ValidationError>
          <p className="label-validation-error" role="alert">
            {errors[label].message}
          </p>
        </ValidationError>
      )}
    </>
  );
};

export default Input;

const ValidationError = styled.div`
  margin-bottom: 20px;
  padding-left: 15px;

  .label-validation-error {
    color: ${props => props.theme.red};
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.grey};
  border-radius: 10px;
  overflow: hidden;

  .label-icon {
    position: absolute;
    height: 48px;
    padding: 10px;
    background-color: ${props => props.theme.grey};
  }

  input {
    width: 100%;
    height: 48px;
    padding-left: 70px;
  }

  .label-input-wrap {
    input {
      &:focus {
        border-bottom: 1px solid ${props => props.theme.blue500};
      }
    }
  }

  .label-input-wrap-error {
    input {
      &:focus {
        border-bottom: 1px solid ${props => props.theme.red};
      }
    }
  }
`;
