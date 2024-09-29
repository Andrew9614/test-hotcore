'use client';

import styled from 'styled-components';

interface FlexProps {
  $alignItems?: 'start' | 'center' | 'end' | 'stretch';
  $justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  $gap?: number | string;
  $direction?: 'row' | 'column';
}

export const FlexContainer = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  flex-wrap: ${({ $wrap }) => $wrap};
  gap: ${({ $gap }) =>
    $gap != null ? (typeof $gap === 'number' ? $gap + 'px' : $gap) : '8px'};
  flex-direction: ${({ $direction }) => $direction ?? 'column'};
`;
