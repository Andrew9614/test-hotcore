import {
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import * as S from './MainInputStyles';
import { InputContainer, InputErrorMessage } from '../commonStyles';

export type MainInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'prefix'
> & {
  error?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  prefixProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  suffixProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

export const MainInput = forwardRef<HTMLDivElement, MainInputProps>(
  function MainInput(
    {
      error,
      suffix,
      suffixProps,
      prefixProps,
      className,
      prefix,
      ...inputProps
    },
    ref
  ) {
    return (
      <S.Container ref={ref} className={className}>
        <InputContainer className='main-input-wrapper'>
          <S.InputWrapper>
            {prefix && <S.Prefix {...prefixProps}>{prefix}</S.Prefix>}
            <S.Input {...inputProps} />
            {suffix && <S.Suffix {...suffixProps}>{suffix}</S.Suffix>}
          </S.InputWrapper>
        </InputContainer>
        {error && <InputErrorMessage>{error}</InputErrorMessage>}
      </S.Container>
    );
  }
);
