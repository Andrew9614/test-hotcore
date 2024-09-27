import { MessengerLayout } from '@/components/Messenger/MessengerLayout/MessengerLayout';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return <MessengerLayout>{children}</MessengerLayout>;
}
