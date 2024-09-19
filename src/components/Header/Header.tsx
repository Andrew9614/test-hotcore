import { FlexContainer } from '../UI/common/FlexContainer';
import * as S from './HeaderStyles';

export const Header = () => {
  return (
    <S.Container>
      <FlexContainer $gap={40} $alignItems="center" $direction="row">
        <FlexContainer $gap={30} $alignItems="center" $direction="row">
          <p>Byway</p>
          <p>Categories</p>
          <input type="text" placeholder="Search" />
        </FlexContainer>
        <p>Teach on Byway</p>
      </FlexContainer>
      <S.Profile>
        <p>Profile</p>
        <p>Sign out</p>
      </S.Profile>
    </S.Container>
  );
};
