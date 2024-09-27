export interface DialogItem {
  id: string;
  name: string;
  lastMessage: string;
  userImg?: string;
  lastMessageDate?: number;
}

export interface MessageItem {
  id: string;
  text: string;
  date: string;
  userId: string;
  userImg?: string;
}
