'use client';

import { IconButton } from '@/components/UI/buttons/IconButton';
import * as S from './MessengerHeaderStyles';
import { FlexContainer } from '@/components/UI/common/FlexContainer';
import { User } from '@/models/profile';
import Arrow from '@/assets/svg/arrow-big-icon.svg';
import { MESSENGER_ROUTE } from '@/constants/routes';
import { useRouter } from 'next/navigation';

interface MessengerHeaderProps {
  interlocutorInfo: User;
}

export const MessengerHeader = ({ interlocutorInfo }: MessengerHeaderProps) => {
  const router = useRouter();
  return (
    <S.Container>
      <FlexContainer $direction="row" $alignItems="center">
        <IconButton onClick={() => router.push(MESSENGER_ROUTE)}>
          <Arrow />
        </IconButton>
        <S.UserPhoto
          src={interlocutorInfo.userImg ?? ''}
          alt="user"
          width={60}
          height={60}
        />
        <h2>{interlocutorInfo.name}</h2>
      </FlexContainer>
      <IconButton>&#8226;&#8226;&#8226;</IconButton>
    </S.Container>
  );
};
