import { messengerApi } from '@/api/messenger/messengerApi';
import { SortingType } from '@/models/common';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: Record<string, string | undefined>;
}) {
  const sortType = (searchParams?.sort ?? 'relevance') as SortingType;
  return (
    <Suspense key={sortType} fallback={<div>Loading</div>}>
      <SuspendedPage sortType={sortType} />
    </Suspense>
  );
}

const SuspendedPage = async ({ sortType }: { sortType: SortingType }) => {
  await messengerApi.getDialogs({ sort_type: sortType });
  return <div>Messenger</div>;
};
