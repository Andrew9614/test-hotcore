'use client';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useThrottleCallback } from '@/hooks/useThrottleCallback';
import {
  DetailedHTMLProps,
  FocusEvent,
  MouseEvent,
  ReactNode,
  SelectHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './MainSelectStyles';
import Arrow from '@/assets/svg/arrow-icon.svg';
import { InputErrorMessage } from '../commonStyles';

export type MainSelectOptionType<T extends string | number = string> = {
  value: T;
  label: ReactNode;
};

export type MainSelectorPropsType<T extends string | number> = Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  'value'
> & {
  error?: string;
  options?: MainSelectOptionType<T>[];
  placeholder?: string;
  value?: T;
};

export const MainSelect = <T extends string | number>({
  error,
  options,
  className,
  tabIndex,
  ...props
}: MainSelectorPropsType<T>) => {
  const nativeSelectRef = useRef<HTMLSelectElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(props.value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getOptionLabel = (value: MainSelectorPropsType<T>['value']) => {
    return options?.find((el) => el.value === value)?.label;
  };

  const handleItemClick = (value: MainSelectorPropsType<T>['value']) => {
    setValue(value);
    setIsDropdownOpen(false);
  };

  const handleContainerOpen = useThrottleCallback(
    (
      e?:
        | MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        | FocusEvent<HTMLDivElement, Element>
    ) => {
      e?.stopPropagation();
      setIsDropdownOpen((prev) => !prev);
    },
    100
  );

  useEffect(() => {
    if (!nativeSelectRef.current) return;
    const event = new Event('change', {
      bubbles: true,
    });
    nativeSelectRef.current.value = value as string;
    nativeSelectRef.current.dispatchEvent(event);
  }, [value]);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useOutsideClick(dropdownContainerRef, () => {
    if (!isDropdownOpen) return;
    handleContainerOpen();
  });

  return (
    <S.Container>
      <S.SelectContainer
        className={className}
        tabIndex={tabIndex}
        onClick={handleContainerOpen}
        onFocus={handleContainerOpen}
        onBlur={() => {
          setIsDropdownOpen(false);
        }}
      >
        <S.NativeSelect
          aria-label={props.placeholder}
          ref={nativeSelectRef}
          {...props}
        >
          {options?.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </S.NativeSelect>
        {value ? (
          <S.CurrentValue>{getOptionLabel(props.value)}</S.CurrentValue>
        ) : (
          <S.Placeholder>{props.placeholder}</S.Placeholder>
        )}
        <S.DropdownContainer
          ref={dropdownContainerRef}
          $isOpen={isDropdownOpen}
          $total={options?.length || 0}
        >
          {options?.map((el, i) => (
            <S.DropdownItem
              $isActive={el.value === props.value}
              $first={!i}
              key={el.value}
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(el.value);
              }}
            >
              {el.label}
            </S.DropdownItem>
          ))}
        </S.DropdownContainer>
        <S.Arrow $isOpen={isDropdownOpen}>
          <Arrow />
        </S.Arrow>
      </S.SelectContainer>
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </S.Container>
  );
};
