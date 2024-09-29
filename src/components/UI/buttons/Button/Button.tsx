import * as S from './ButtonStyles';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant, ...props }, ref) {
    return (
      <S.Container ref={ref} $variant={variant ?? 'contained'} {...props} />
    );
  }
);
