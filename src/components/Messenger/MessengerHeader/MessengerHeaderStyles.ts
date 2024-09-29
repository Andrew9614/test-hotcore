'use client';

import { FlexContainer } from '@/components/UI/common/FlexContainer';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled(FlexContainer)`
  flex-shrink: 0;
  height: 90px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
  box-sizing: border-box;
`;

export const UserPhoto = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`