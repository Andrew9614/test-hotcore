'use client';

import { DialogItem } from '@/models/messenger';
import * as S from './DialogsCardStyles';
import { FlexContainer } from '@/components/UI/common/FlexContainer';
import { HTMLAttributes } from 'react';
import { useRouter } from 'next/navigation';
import { MESSENGER_ROUTE } from '@/constants/routes';
import dayjs from 'dayjs';

interface DialogsCardProps extends HTMLAttributes<HTMLDivElement> {
  dialogItem: DialogItem;
}

export const DialogsCard = ({ dialogItem, ...rest }: DialogsCardProps) => {
  const router = useRouter();
  const lastMessageDate = dayjs(dialogItem.lastMessageDate).format(
    'DD[th] MMM, YYYY'
  );
  return (
    <S.Container
      onClick={() => router.push(MESSENGER_ROUTE + '/' + dialogItem.id)}
      {...rest}
    >
      <S.DialogInfo>
        <FlexContainer $direction="row" $gap={8} $alignItems="center">
          <S.UserPhoto
            src={dialogItem.userImg ?? ''}
            alt="user"
            width={40}
            height={40}
          />
          <h2>{dialogItem.name}</h2>
        </FlexContainer>
        <p>{lastMessageDate}</p>
      </S.DialogInfo>
      <S.LastMessage>{dialogItem.lastMessage}</S.LastMessage>
    </S.Container>
  );
};
