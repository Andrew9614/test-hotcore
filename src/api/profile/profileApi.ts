export const profileApi = {
  getProfile: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          name: 'John Doe',
          lastMessage: {
            id: '1',
            text: 'Hello',
            createdAt: new Date(),
          },
        });
      }, 1000);
    });
  },
};
