'use client';

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
`;

export const InputWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  box-sizing: border-box;
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
  align-items: center;
`;

export const Prefix = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
