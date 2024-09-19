'use client';

import styled from 'styled-components';
import { FlexContainer } from '../UI/common/FlexContainer';

export const Container = styled.header`
  width: 100%;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 80px;
  border-bottom: 1px solid #e2e8f0;
  box-sizing: border-box;
`;

export const Profile = styled(FlexContainer)`
  flex-direction: row;
  gap: 22px;
  align-items: center;
`;
