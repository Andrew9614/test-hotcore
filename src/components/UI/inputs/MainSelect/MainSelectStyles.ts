'use client';

import styled from 'styled-components';
import { InputContainer } from '../commonStyles';

export const Container = styled(InputContainer)``;

export const SelectContainer = styled.div`
  min-width: 140px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  padding: 4px 12px;
  font-size: 14px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export const NativeSelect = styled.select`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
`;

export const CurrentValue = styled.div``;

export const Placeholder = styled.div`
  color: black;
`;

export const DropdownItem = styled.div<{
  $isActive?: boolean;
  $first?: boolean;
}>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 16px 20px;
  border-top: ${({ $first }) => !$first && `1px solid black`};
  background-color: ${({ $isActive }) => $isActive && '#e2e8f0'};
  &:hover {
    background-color: #e2e8f0;
  }
`;

export const DropdownContainer = styled.div<{
  $isOpen: boolean;
  $total: number;
}>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  max-height: 300px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 99;
  border: 1px solid black;
  overflow: auto;
  transition: transform 0.2s;
  animation: ease-in-out;
  transform: scaleY(${({ $isOpen }) => ($isOpen ? 1 : 0)});
  transform-origin: top;
`;

export const Arrow = styled.div<{ $isOpen: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : 0)});
  svg {
    width: 16px;
    height: 8px;
  }
`;
