import * as S from './ButtonStyles';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    return <S.Container ref={ref} {...props} />;
  }
);
