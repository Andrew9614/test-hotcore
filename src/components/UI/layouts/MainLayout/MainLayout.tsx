import { ReactNode } from 'react';
import * as S from './MainLayoutStyles';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.Container>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Container>
  );
};
