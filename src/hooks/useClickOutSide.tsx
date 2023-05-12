import { assertIsNode } from '@/lib';
import { useCallback, useEffect } from 'react';

const useClickOutside = (containerRef: React.RefObject<HTMLElement>, cb: () => void, ignoreSelector?: string) => {
  const handleClickOutside: EventListener = useCallback(
    (e) => {
      assertIsNode(e.target);
      const target = e.target as HTMLElement;

      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        ignoreSelector &&
        !target.matches(ignoreSelector)
      ) {
        cb();
      }
    },
    [cb, containerRef, ignoreSelector],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
