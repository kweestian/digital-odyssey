import { useEffect, useState } from 'react';

export default () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  const getItem = (key: string) => window.localStorage.getItem(key);
  const setItem = (key: string, value: string) => window.localStorage.setItem(key, value);

  useEffect(() => {
    if (getItem('HAS_LOGGED_IN') === 'true') {
      setIsFirstVisit(true);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(false);
    setItem('HAS_LOGGED_IN', 'true');
  };

  return { isOpen, isFirstVisit, handleClick };
};
