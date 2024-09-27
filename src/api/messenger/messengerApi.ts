import { GetDialogsPayload, GetDialogsResponse } from './types';

export const messengerApi = {
  getMessages: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            text: 'Hello',
            createdAt: new Date(),
          },
          {
            id: '2',
            text: 'World',
            createdAt: new Date(),
          },
        ]);
      }, 1000);
    });
  },
  getDialogs: ({ sort_type }: GetDialogsPayload) => {
    return new Promise<GetDialogsResponse>((resolve) => {
      setTimeout(() => {
        resolve({
          dialogs: [
            {
              id: '1',
              name: 'John Doe',
              lastMessage: 'Hello',
              userImg: 'https://picsum.photos/200',
              lastMessageDate: 170619840000,
            },
          ].sort((a, b) =>
            sort_type === 'date'
              ? b.lastMessageDate - a.lastMessageDate
              : Math.random() > 0.5
              ? 1
              : 0
          ),
        });
      }, 1000);
    });
  },
};
