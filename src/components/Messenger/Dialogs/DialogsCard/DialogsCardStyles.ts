'use client';

import { FlexContainer } from '@/components/UI/common/FlexContainer';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled(FlexContainer)`
  width: 100%;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-sizing: border-box;
  cursor: pointer;
`;

export const DialogInfo = styled(FlexContainer)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserPhoto = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

export const LastMessage = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
`;
