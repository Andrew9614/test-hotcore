import { messengerApi } from '@/api/messenger/messengerApi';
import { Messenger } from '@/components/Messenger/Messenger';

type ParamsType = {
  params: { id: string };
};

export default async function Page({ params }: ParamsType) {
  const { messages, interlocutorInfo } = await messengerApi.getMessages({
    id: params.id,
  });
  return <Messenger messages={messages} interlocutorInfo={interlocutorInfo} />;
}
