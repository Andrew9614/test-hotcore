import { MessageItem } from '@/models/messenger';
import * as S from './MessageStyles';

interface MessageProps {
  message: MessageItem;
  self?: boolean;
}

export const Message = ({ message, self }: MessageProps) => {
  return (
    <S.Container $self={self}>
      {message.text}
    </S.Container>
  );
};
