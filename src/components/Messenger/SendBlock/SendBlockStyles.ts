'use client';

import { FlexContainer } from '@/components/UI/common/FlexContainer';
import { MainInput } from '@/components/UI/inputs/MainInput/MainInput';
import styled from 'styled-components';

export const Container = styled(FlexContainer)`
  height: 80px;
  flex-direction: row;
  gap: 24px;
  padding: 16px;
  border-top: 1px solid #e2e8f0;
  box-sizing: border-box;
`;

export const MessageInput = styled(MainInput)`
  width: 100%;
  height: 100%;
  & .main-input-wrapper {
    height: 100%;
    border: 1px solid #e2e8f0;
    color: black;
    font-size: 14px;
    padding: 0;
  }
  & input::placeholder{
    color: #94A3B8;
  }
`;
