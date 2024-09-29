import { ComponentProps, Key, Suspense } from 'react';
import { Loader } from './Loader/Loader';

export const MainSuspense = ({
  fallback,
  keyProp,
  ...props
}: ComponentProps<typeof Suspense> & { keyProp?: Key | null | undefined }) => {
  return (
    <Suspense key={keyProp} fallback={fallback || <Loader />} {...props}>
      {props.children}
    </Suspense>
  );
};
