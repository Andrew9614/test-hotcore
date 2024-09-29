'use client';

import styled from 'styled-components';
import { FlexContainer } from '../UI/common/FlexContainer';
import { MainInput } from '../UI/inputs/MainInput/MainInput';

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 80px;
  border-bottom: 1px solid #e2e8f0;
  box-sizing: border-box;
  background-color: white;
  z-index: 99;
`;

export const NavContainer = styled(FlexContainer)`
  flex: 1;
`

export const Profile = styled(FlexContainer)`
  flex-direction: row;
  gap: 18px;
  align-items: center;
`;

export const ProfileButton = styled.button`
  width: 40px;
  aspect-ratio: 1;
  background: #94a3b8;
  border-radius: 50px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: white;
`;

export const SearchInput = styled(MainInput)`
  flex: 1;
  max-width: 630px;
`;
