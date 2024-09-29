import { MessageItem } from '@/models/messenger';
import * as S from './MessengerStyles';
import { MessengerHeader } from './MessengerHeader/MessengerHeader';
import { User } from '@/models/profile';
import { MessagesList } from './MessagesList/MessagesList';
import { SendBlock } from './SendBlock/SendBlock';

interface MessengerProps {
  messages: MessageItem[];
  interlocutorInfo: User;
}

export const Messenger = ({ messages, interlocutorInfo }: MessengerProps) => {
  return (
    <S.Container>
      <MessengerHeader interlocutorInfo={interlocutorInfo} />
      <MessagesList
        messages={messages}
        interLocutorImage={interlocutorInfo.userImg}
      />
      <SendBlock />
    </S.Container>
  );
};
