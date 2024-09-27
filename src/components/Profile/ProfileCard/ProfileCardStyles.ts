'use client';

import { Button } from '@/components/UI/buttons/Button/Button';
import { Divider } from '@/components/UI/common/Divider';
import { FlexContainer } from '@/components/UI/common/FlexContainer';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(FlexContainer)`
  width: 290px;
  border-radius: 16px;
  background-color: #f8fafc;
  overflow: hidden;
  padding-top: 24px;
`;

export const ProfileImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

export const SharingButton = styled(Button)`
  gap: 8px;
  border: 1px solid #e2e8f0;
  background-color: white;
  color: #0f172a;
`;

export const Hr = styled(Divider)`
  margin: 0 8px;
  box-sizing: border-box;
`;

export const NavLink = styled(Link)`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  transition: background-color 0.1s, color 0.1s;
  &:hover,
  &[aria-selected='true'] {
    background-color: #0f172a;
    color: white;
  }
`;
