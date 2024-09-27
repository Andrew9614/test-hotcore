'use client';

import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const MessengerLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <button onClick={() => router.push(pathname + '?sort=asc')}>1</button>
      <div>{children}</div>
    </div>
  );
};
