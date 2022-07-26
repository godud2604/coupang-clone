import { InputHTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  isChild?: boolean;
  bold?: boolean;
  description?: {};
}

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  ({ title, description, bold, isChild, ...props }, ref) => (
    <Wrapper bold={bold} isChild={isChild}>
      <label>
        <input type='checkbox' ref={ref} {...props} />
        <span>{title}</span>
      </label>
      {description && <button>〉</button>}
    </Wrapper>
  )
);

export default Checkbox;

const Wrapper = styled.div<{ bold?: boolean; isChild?: boolean }>`
  padding-bottom: 12px;
  padding-left: ${({ isChild }) => (isChild ? '22px' : '0')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    span {
      margin-left: 8px;
      color: #333333;
      font-size: ${({ bold }) => (bold ? '16px' : '14px')};
      font-weight: ${({ bold }) => (bold ? 'bold' : 400)};
      line-height: 1.4;
    }
  }

  button {
    background-color: transparent;
    width: 20px;
    height: 20px;
    font-size: 18px;
    font-weight: bold;
  }
`;
