'use client';

import { useAuth } from '@/hooks/useAuth';
import * as S from './ProfileCardStyles';
import { FlexContainer } from '@/components/UI/common/FlexContainer';
import ShareIcon from '@/assets/svg/share-icon.svg';
import { usePathname } from 'next/navigation';
import { PROFILE_ROUTE } from '@/constants/routes';

export const ProfileCard = () => {
  const currentPath = usePathname();
  const auth = useAuth();
  const user = auth.authData?.userInfo;
  console.log(currentPath === PROFILE_ROUTE);
  return (
    <S.Container $gap={24}>
      <FlexContainer $gap={16} $alignItems="center">
        <S.ProfileImage
          src={user?.userImg ?? ''}
          alt="user"
          width={160}
          height={160}
        />
        <h1>{user?.name}</h1>
        <S.SharingButton>
          {'Share Profile'} <ShareIcon />
        </S.SharingButton>
      </FlexContainer>
      <S.Hr />
      <nav>
        <S.NavLink
          href={PROFILE_ROUTE}
          aria-selected={currentPath === PROFILE_ROUTE}
        >
          Profile
        </S.NavLink>
        <S.NavLink
          href={PROFILE_ROUTE + '/courses'}
          aria-selected={currentPath === PROFILE_ROUTE + '/courses'}
        >
          My Courses
        </S.NavLink>
        <S.NavLink
          href={PROFILE_ROUTE + '/teachers'}
          aria-selected={currentPath === PROFILE_ROUTE + '/teachers'}
        >
          Teachers
        </S.NavLink>
        <S.NavLink
          href={PROFILE_ROUTE + '/messenger'}
          aria-selected={currentPath === PROFILE_ROUTE + '/messenger'}
        >
          Message
        </S.NavLink>
        <S.NavLink
          href={PROFILE_ROUTE + '/my-reviews'}
          aria-selected={currentPath === PROFILE_ROUTE + '/my-reviews'}
        >
          My Reviews
        </S.NavLink>
      </nav>
    </S.Container>
  );
};
