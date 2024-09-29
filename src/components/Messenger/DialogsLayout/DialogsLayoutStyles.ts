'use client';

import { Button } from '@/components/UI/buttons/Button/Button';
import { FlexContainer } from '@/components/UI/common/FlexContainer';
import { MainInput } from '@/components/UI/inputs/MainInput/MainInput';
import styled from 'styled-components';

export const Container = styled(FlexContainer)`
  width: 100%;
  gap: 16px;
  min-width: 0;
`;

export const FiltersContainer = styled(FlexContainer)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30px;
`;

export const SearchInput = styled(MainInput)`
  width: 300px;
  & .main-input-wrapper {
    font-size: 14px;
    border-color: #e2e8f0;
  }
`;

export const FilterButton = styled(Button)`
  gap: 8px;
`;
