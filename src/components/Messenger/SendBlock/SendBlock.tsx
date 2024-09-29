import { Button } from '@/components/UI/buttons/Button/Button';
import * as S from './SendBlockStyles';

export const SendBlock = () => {
  return (
    <S.Container>
      <S.MessageInput placeholder="Message" />
      <Button>Send</Button>
    </S.Container>
  );
};
