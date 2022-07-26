import { InputHTMLAttributes, forwardRef, ComponentProps } from 'react';
import styled from '@emotion/styled';

interface IIput extends InputHTMLAttributes<HTMLInputElement>, IMessage {
  icon?: string;
  isValid?: boolean;
}

const Input = forwardRef<HTMLInputElement, IIput>(
  ({ icon, isValid, message, validations, ...props }, ref) => (
    <Wrapper error={!!message}>
      <label>
        <span>{icon || '✉️'}</span>
        <input ref={ref} {...props} />
        {isValid && <span className='valid-icon'>✓</span>}
      </label>
      <Messages message={message} validations={validations} />
    </Wrapper>
  )
);

export default Input;

const Wrapper = styled.label<{ error: boolean }>`
  &:focus-within {
    border: red;
  }
  & > label {
    display: flex;
    position: relative;
    margin-top: 14px;
    width: 100%;
    border: 1px solid #ccc;
    background-color: #fafafa;
    transition: border-color 0.25s ease;
    border-bottom: ${({ error }) => (error ? '2px solid #e7223d' : '')};

    &:focus-within {
      border-bottom: 2px solid ${({ error }) => (error ? '#e7223d' : '#0074e9')};
    }

    & > span {
      margin: auto;
      min-width: 44px;
      height: 100%;
      text-align: center;
    }

    input {
      padding: 16px 12px;
      height: 48px;
      width: 100%;
      border-left: 1px solid #ccc;
      color: #111;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #aaa;
      }
    }
    .valid-icon {
      position: absolute;
      right: 0;
      top: 13px;
      color: #0074e9;
    }
  }
`;

interface IMessage {
  message?: string;
  validations?: { type: string; invalid: boolean; message: string }[];
}

const Messages = ({ message, validations }: IMessage) => (
  <Box>
    {validations
      ? validations.map(({ invalid, message }) => (
          <ValidMessages invalid={invalid}>
            <span>{invalid ? 'X' : '✓'}</span>
            {message}
          </ValidMessages>
        ))
      : message && <span>{message}</span>}
  </Box>
);

const Box = styled.div`
  margin: 9px 12px 0;

  font-size: 12px;
  line-height: 18px;
  color: #e52528;
  span {
  }
`;

const ValidMessages = styled.span<{ invalid: boolean }>`
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => (props.invalid ? '#e52528' : '#00891a')};

  span {
    display: inline-block;
    width: 16px;
    height: 18px;
    color: ${(props) => (props.invalid ? '#e52528' : '#00891a')};
  }
`;
