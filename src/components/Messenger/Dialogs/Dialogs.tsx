import { messengerApi } from '@/api/messenger/messengerApi';
import * as S from './DialogsStyles';
import { SortingType } from '@/models/common';
import { DialogsCard } from './DialogsCard/DialogsCard';

interface DialogsProps {
  sortingType: SortingType;
}

export const Dialogs = async ({ sortingType }: DialogsProps) => {
  const { dialogs } = await messengerApi.getDialogs({ sort_type: sortingType });
  return (
    <S.Container>
      {dialogs.map((el) => (
        <DialogsCard key={el.id} dialogItem={el} />
      ))}
    </S.Container>
  );
};
