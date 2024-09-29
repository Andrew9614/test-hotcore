import * as S from './HeaderStyles';
import { FlexContainer } from '../UI/common/FlexContainer';
import Image from 'next/image';
import FavoritesIcon from '@/assets/svg/heart-icon.svg';
import CartIcon from '@/assets/svg/cart-icon.svg';
import NotificationsIcon from '@/assets/svg/bell-icon.svg';
import SearchIcon from '@/assets/svg/magnifier-icon.svg';
import logoImg from '@/assets/img/logo.png';
import { IconButton } from '../UI/buttons/IconButton';

export const Header = () => {
  return (
    <S.Container>
      <FlexContainer $gap={30} $alignItems="center" $direction="row">
        <FlexContainer $gap={0} $alignItems="center" $direction="row">
          <Image src={logoImg} alt="logo" width={40} height={40} />
          <p>Byway</p>
        </FlexContainer>
        <p>Categories</p>
        <S.SearchInput prefix={<SearchIcon />} placeholder="Search" />
        <p>Teach on Byway</p>
      </FlexContainer>
      <S.Profile>
        <IconButton>
          <FavoritesIcon />
        </IconButton>
        <IconButton>
          <CartIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <S.ProfileButton>J</S.ProfileButton>
      </S.Profile>
    </S.Container>
  );
};
