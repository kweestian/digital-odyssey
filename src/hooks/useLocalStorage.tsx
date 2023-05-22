import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue?: T): [T | undefined, (value?: T | ((val?: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T | undefined>();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        } else if (initialValue !== undefined) {
          setStoredValue(initialValue);
        }
      } catch (error) {
        console.log(error);
        if (initialValue !== undefined) {
          setStoredValue(initialValue);
        }
      }
    }
  }, [key, initialValue, hasMounted]);

  const setValue = (value?: T | ((val?: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
