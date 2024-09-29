import { Spinner } from '../../common/Spinner';
import * as S from './LoaderStyles';

export const Loader = () => {
  return (
    <S.Container>
      <Spinner />
    </S.Container>
  );
};
