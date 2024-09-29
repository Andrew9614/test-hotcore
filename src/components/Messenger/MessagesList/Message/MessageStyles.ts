'use client';

import styled from 'styled-components';

export const Container = styled.div<{ $self?: boolean }>`
  width: fit-content;
  max-width: 60%;
  padding: 12px 16px;
  border-radius: 8px;
  align-self: ${(props) => (props.$self ? 'flex-end' : 'flex-start')};
  color: ${(props) => (props.$self ? 'white' : 'inherit')};
  background-color: ${(props) => (props.$self ? '#0f172a' : '#F1F5F9')};
  font-size: 16px;
`;
