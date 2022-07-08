import { forwardRef, Ref, ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  type: 'submit' | 'button';
}
const Button = forwardRef(function Button(props: Props, forwardedRef: Ref<HTMLButtonElement>) {
  const { fullWidth = true, type, children, ...rest } = props;

  return (
    <button
      type={type}
      ref={forwardedRef}
      css={theme => ({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        height: '56px',
        border: '0 solid transparent',
        borderRadius: '16px',
        backgroundColor: theme.blue500,
        color: theme.white,
        fontSize: '17px',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        transition: 'color 0.1s ease-in-out, background-color 0.1s ease-in-out',
        '&:focus': {
          outline: 'none',
        },
        '&:disabled': {
          opacity: 0.26,
          cursor: 'not-allowed',
        },
        '&:active': {
          backgroundColor: theme.blue700,
        },
      })}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
});

export default Button;
