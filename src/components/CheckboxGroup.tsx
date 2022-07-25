import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { ChangeHandler } from "react-hook-form";

type SelectProps = {
  data: { comment: string }[];
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  placeholder?: string;
};

const Select = forwardRef(
  ({ data, ...rest }: SelectProps, ref: React.Ref<any>) => {
    return (
      <>
        {data.map((item) => (
          <SLabel key={item.comment}>
            <SInput
              type="checkbox"
              defaultValue={item.comment}
              ref={ref}
              {...rest}
            />
            <SContent>{item.comment}</SContent>
          </SLabel>
        ))}
      </>
    );
  }
);

Select.displayName = "Select";

export default Select;


export const SLabel = styled.label`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
`;
export const SContent = styled.span`
  color: #333333;
  font-size: 14px;
  font-weight: 500;
`;

export const SInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 5px;
`;