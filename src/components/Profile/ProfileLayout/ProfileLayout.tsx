import { PropsWithChildren } from 'react';
import * as S from './ProfileLayoutStyles';
import { ProfileCard } from '../ProfileCard/ProfileCard';

export const ProfileLayout = ({ children }: PropsWithChildren) => {
  return (
    <S.Container>
      <ProfileCard />
      {children}
    </S.Container>
  );
};
