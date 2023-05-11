import { assertIsNode } from '@/lib';
import { useCallback, useEffect } from 'react';

// eslint-disable-next-line comma-spacing
const useClickOutSide = <T extends Node>(ref: React.RefObject<T>, cb: () => void) => {
  const handleClickOutside: EventListener = useCallback(
    (e) => {
      assertIsNode(e.target);
      if (!ref.current?.contains(e.target)) {
        cb();
      }
    },
    [cb, ref],
  );

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutSide;
