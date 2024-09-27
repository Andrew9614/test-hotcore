'use client';

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
`;

export const InputContainer = styled.div`
  position: relative;
  min-height: 40px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const InputErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
`;

export const Input = styled.input`
  width: 100%;
  min-height: inherit;
  border: unset;
  background-color: inherit;
  color: inherit;
  font-family: inherit;
  font-style: normal;
  line-height: 30px;
  font-size: inherit;
  &:focus {
    outline: none !important;
  }
  &::placeholder {
    font-size: inherit;
    color: black;
    opacity: 1;
  }
`;

export const Suffix = styled.div`
  height: 100%;
  display: flex;
`;

export const Prefix = styled.div`
  height: 100%;
  display: flex;
`;
