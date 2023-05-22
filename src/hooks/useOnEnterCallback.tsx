import { useEffect } from 'react';

const useOnEnterCallBack = (cb: () => void) => {
  useEffect(() => {
    const handleSubmit = (evt: KeyboardEvent) => {
      if (evt.code === 'Enter' || evt.code === 'NumpadEnter') {
        console.log('how many usbmits bro ?');
        cb();
      }
    };
    window.addEventListener('keydown', handleSubmit);
    return () => window.addEventListener('keydown', handleSubmit);
  }, [cb]);
};

export default useOnEnterCallBack;
