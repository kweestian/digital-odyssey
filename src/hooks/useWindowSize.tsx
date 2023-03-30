import { useSyncExternalStore } from 'react';

type Store = {
  size: {
    width: number | undefined;
    height: number | undefined;
  };
};

const store: Store = {
  size: {
    width: undefined,
    height: undefined,
  },
};

function getServerSnapshot() {
  return store.size;
}

function getSnapshot() {
  if (store.size.height !== window.innerHeight || store.size.width !== window.innerWidth) {
    store.size = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }
  return store.size;
}

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function useWindowSize() {
  const { width, height } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { width, height };
}

export default useWindowSize;
