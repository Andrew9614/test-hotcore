type ParamsType = {
  params: { id: string };
};

export default function Page({ params }: ParamsType) {
  return <div>{params.id}</div>;
}
