/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react';

export function useThrottleCallback<T extends (...args: any) => any>(
  func: T,
  ms: number,
  executeLast?: boolean
) {
  const isThrottled = useRef(false);
  const savedArgs = useRef<Parameters<T> | null>(null);
  const savedThis = useRef<ThisType<T> | null>(null);

  function wrapper(...args: Parameters<T>) {
    if (isThrottled.current) {
      savedArgs.current = args;
      return;
    }

    func(...args);

    isThrottled.current = true;

    setTimeout(function () {
      isThrottled.current = false;
      if (savedArgs.current && savedThis.current && executeLast) {
        wrapper.apply(savedThis.current, savedArgs.current);
        savedArgs.current = savedThis.current = null;
      }
    }, ms);
  }

  return useCallback(wrapper, [executeLast, func, ms, wrapper]);
}
