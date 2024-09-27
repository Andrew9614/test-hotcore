import { ProfileLayout } from '@/components/Profile/ProfileLayout/ProfileLayout';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <ProfileLayout>{children}</ProfileLayout>;
}
