'use client';

import styled from 'styled-components';
import { CleanButton } from './CleanButton';

export const IconButton = styled(CleanButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  aspect-ratio: 1;
  border-radius: 50%;
  transition: background-color 0.2s;
  box-sizing: content-box;
  &:hover {
    background-color: #e2e8f0;
  }
`;
