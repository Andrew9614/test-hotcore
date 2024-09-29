'use client';

import { FlexContainer } from '@/components/UI/common/FlexContainer';
import styled from 'styled-components';

export const Container = styled(FlexContainer)`
  flex: 1;
  flex-direction: column-reverse;
  width: 100%;
  gap: 24px;
  padding: 16px;
  overflow: auto;
  box-sizing: border-box;
`;

export const DateContainer = styled(FlexContainer)`
  width: 100%;
  gap: 24px;
`;

export const MessageContainer = styled(FlexContainer)`
  width: 100%;
`;

export const Date = styled.div`
  width: fit-content;
  position: sticky;
  top: 0;
  left: 50%;
  padding: 8px;
  margin-bottom: -8px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background-color: #f1f5f9;
  font-size: 12px;
  font-weight: 600;
  z-index: 9;
  transform: translateX(-50%);
`;

export const Time = styled.div<{ $self?: boolean }>`
  align-self: ${(props) => (props.$self ? 'flex-end' : 'flex-start')};
  color: #64748b;
  font-size: 12px;
`;
