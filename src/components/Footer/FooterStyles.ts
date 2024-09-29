'use client';

import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 80px;
  padding-bottom: 140px;
  color: white;
  background-color: #1e293b;
  & p,
  & a {
    color: #cbd5e1;
  }
`;

export const Description = styled.p`
  max-width: 400px;
`;
