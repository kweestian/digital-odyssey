import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useURLParams = () => {
  const router = useRouter();
  const [params, setParams] = useState<Record<string, string | string[] | undefined>>({});

  useEffect(() => {
    setParams(router.query);
  }, [router.query]);

  const getItem = (key: string): string | undefined => params[key] as string;

  const setItem = (key: string, value: string | string[]) => {
    const updatedParams = {
      ...params,
      [key]: value,
    };

    router.push({
      pathname: router.pathname,
      query: updatedParams,
    });
  };

  const setItems = (items: { key: string; value: string | string[] }[]) => {
    const updatedParams = {
      ...params,
    };

    items.forEach(({ key, value }) => {
      updatedParams[key] = value;
    });

    router.push({
      pathname: router.pathname,
      query: updatedParams,
    });
  };

  const removeItem = (key: string) => {
    const { [key]: _omit, ...updatedParams } = params;

    router.push({
      pathname: router.pathname,
      query: updatedParams,
    });
  };

  const clear = () => {
    router.push({
      pathname: router.pathname,
      query: {},
    });
  };

  return { params, setItem, removeItem, clear, getItem, setItems };
};

export default useURLParams;
