import { SortingType } from '@/models/common';
import { DialogItem } from '@/models/messenger';

export interface GetDialogsPayload {
  sort_type: SortingType;
}

export interface GetDialogsResponse {
  dialogs: DialogItem[];
}
