import { RefObject, useCallback, useEffect } from 'react';

export function useOutsideClick<T extends HTMLElement = any>(
  ref: RefObject<T>,
  callback: () => void
) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callback, handleClickOutside, ref]);
}
