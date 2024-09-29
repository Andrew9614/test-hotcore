'use client';

import { MessageItem } from '@/models/messenger';
import * as S from './MessagesListStyles';
import { Message } from './Message/Message';
import { useAuth } from '@/hooks/useAuth';
import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlexContainer } from '@/components/UI/common/FlexContainer';
import Image from 'next/image';

interface MessagesListProps {
  messages: MessageItem[];
  interLocutorImage?: string;
}

export const MessagesList = ({
  messages: rawMessages,
  interLocutorImage,
}: MessagesListProps) => {
  const { authData } = useAuth();
  const user = authData?.userInfo;

  const [messagesByDateMap, setMessagesByDateMap] = useState<
    Map<string, Map<string, MessageItem[]>>
  >(new Map());

  const prepareMessages = useCallback(() => {
    const messagesByDate = new Map<string, Map<string, MessageItem[]>>();
    rawMessages.forEach((message) => {
      const keyDate = dayjs(message.date).format('DD.MM.YYYY');
      const keyMinute = `${dayjs(message.date)
        .set('minutes', 0)
        .format('hh:mm a')}|${message.userId}`;
      let dateGroupMap = messagesByDate.get(keyDate);
      if (!dateGroupMap) {
        const map = new Map();
        messagesByDate.set(keyDate, map);
        dateGroupMap = map;
      }
      const timeGroup = dateGroupMap.get(keyMinute);
      dateGroupMap.set(
        keyMinute,
        timeGroup ? [message, ...timeGroup] : [message]
      );
    });
    setMessagesByDateMap(messagesByDate);
  }, [rawMessages]);

  const preparedMessages = useMemo(() => {
    const preparedMessages: JSX.Element[] = [];
    messagesByDateMap.forEach((dateMap, date) => {
      preparedMessages.push(
        <S.DateContainer key={date}>
          <S.Date>{date}</S.Date>
          {Array.from(dateMap.entries())
            .map(([timeWithId, messages], i) => {
              const [time, userId] = timeWithId.split('|');
              const isSelf = userId === user?.id;
              return (
                <FlexContainer key={i}>
                  <S.Time $self={isSelf}>
                    <FlexContainer $direction="row" $alignItems="center">
                      {!isSelf && (
                        <Image
                          src={interLocutorImage ?? ''}
                          alt="user"
                          width={40}
                          height={40}
                          objectFit="cover"
                        />
                      )}
                      {time}
                    </FlexContainer>
                  </S.Time>
                  <S.MessageContainer>
                    {messages.map((message) => (
                      <Message
                        key={message.id}
                        message={message}
                        self={isSelf}
                      />
                    ))}
                  </S.MessageContainer>
                </FlexContainer>
              );
            })
            .reverse()}
        </S.DateContainer>
      );
    });

    return preparedMessages;
  }, [interLocutorImage, messagesByDateMap, user?.id]);

  useEffect(() => {
    prepareMessages();
  }, [prepareMessages]);

  console.log(messagesByDateMap);
  return <S.Container>{preparedMessages}</S.Container>;
};
