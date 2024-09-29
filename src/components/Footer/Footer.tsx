import Image from 'next/image';
import { FlexContainer } from '../UI/common/FlexContainer';
import * as S from './FooterStyles';
import socialButtons from '@/assets/img/design.png';
import logoImage from '@/assets/img/logo.png';
import Link from 'next/link';

export const Footer = () => {
  return (
    <S.Container>
      <FlexContainer $gap={16}>
        <FlexContainer $gap={0} $direction="row" $alignItems="center">
          <Image src={logoImage} alt="logo" width={40} height={40} />
          <h2>Byway</h2>
        </FlexContainer>
        <S.Description>
          Empowering learners through accessible and engaging online education.
          Byway is a leading online learning platform dedicated to providing
          high-quality, flexible, and affordable educational experiences.
        </S.Description>
      </FlexContainer>
      <FlexContainer>
        <h2>Get Help</h2>
        <Link href="">Contact Us</Link>
        <Link href="">Latest Articles</Link>
        <Link href="">FAQ</Link>
      </FlexContainer>
      <FlexContainer>
        <h2>Programs</h2>
        <Link href="">Art & Design</Link>
        <Link href="">Business</Link>
        <Link href="">IT & Software</Link>
        <Link href="">Languages</Link>
        <Link href="">Programming</Link>
      </FlexContainer>
      <FlexContainer $gap={24}>
        <FlexContainer>
          <h2>Contact Us</h2>
          <p>Address: 123 Main Street, Anytown, CA 12345</p>
          <p>Tel: +(123) 456-7890</p>
          <p>IT & Software</p>
          <p>Mail: bywayedu@webkul.in</p>
        </FlexContainer>
        <Image src={socialButtons} alt="social" width={296} height={40} />
      </FlexContainer>
    </S.Container>
  );
};
