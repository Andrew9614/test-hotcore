'use client';

import styled from 'styled-components';

export const Container = styled.button<{ $variant?: 'contained' | 'outlined' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: ${({ $variant }) =>
    $variant === 'contained' ? 'none' : '1px solid black'};
  border-radius: 8px;
  background-color: ${({ $variant }) =>
    $variant === 'contained' ? '#3b82f6' : 'white'};
  color: ${({ $variant }) => ($variant === 'contained' ? 'white' : '#0f172a')};
  font-size: 14px;
  font-weight: 500;
`;
