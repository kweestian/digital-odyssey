import { assertIsNode } from '@/lib';
import { useCallback, useEffect } from 'react';

const useClickOutside = (containerRef: React.RefObject<HTMLElement>, cb: () => void) => {
  const handleClickOutside: EventListener = useCallback(
    (e) => {
      assertIsNode(e.target);
      const target = e.target as HTMLElement;

      if (containerRef.current && !containerRef.current.contains(target)) {
        cb();
      }
    },
    [cb, containerRef],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
