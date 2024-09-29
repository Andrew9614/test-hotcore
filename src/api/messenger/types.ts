import { SortingType } from '@/models/common';
import { DialogItem, MessageItem } from '@/models/messenger';
import { User } from '@/models/profile';

export interface GetDialogsPayload {
  sort_type: SortingType;
}

export interface GetDialogsResponse {
  dialogs: DialogItem[];
}

export interface GetMessagesPayload {
  id: string;
}

export interface GetMessagesResponse {
  messages: MessageItem[];
  interlocutorInfo: User;
}
