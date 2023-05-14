import React, { useEffect, useState } from 'react';

// eslint-disable-next-line comma-spacing
const useLocalStorage = <S,>(
  key: string,
  initialState?: S | (() => S),
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const parse = (value: string) => {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };
  const [state, setState] = useState<S>(initialState as S);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
  }, [key]);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state, initialState, key]);

  return [state, setState];
};

export default useLocalStorage;
