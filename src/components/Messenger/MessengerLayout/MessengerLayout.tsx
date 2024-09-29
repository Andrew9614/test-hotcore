'use client';

import { PropsWithChildren } from 'react';
import * as S from './MessengerLayoutStyles';

export const MessengerLayout = ({ children }: PropsWithChildren) => {
  return (
    <S.Container>
      <h1>Messages</h1>
      {children}
    </S.Container>
  );
};
