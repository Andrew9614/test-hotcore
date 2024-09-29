import { Dialogs } from '@/components/Messenger/Dialogs/Dialogs';
import { DialogsLayout } from '@/components/Messenger/DialogsLayout/DialogsLayout';
import { SortingType } from '@/models/common';

export default async function Page({
  searchParams,
}: {
  searchParams?: Record<string, string | undefined>;
}) {
  const sortType = (searchParams?.sort ?? 'relevance') as SortingType;
  return (
    <DialogsLayout>
      <Dialogs sortingType={sortType} />
    </DialogsLayout>
  );
}
