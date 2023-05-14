import { useRouter } from 'next/router';

const useUrlParams = () => {
  const router = useRouter();

  const getUrlParam = (key: string): string | undefined =>
    // Retrieve the value of the specified URL parameter from the query object
    router.query[key] as string;

  const setUrlParam = (key: string, value: string) => {
    // Update the specified URL parameter with the given value
    const query = { ...router.query, [key]: value };
    router.push({ pathname: router.pathname, query }, undefined, { shallow: true });
  };

  const setUrlParams = (params: { [key: string]: string }) => {
    const query = { ...router.query, ...params };
    router.push({ pathname: router.pathname, query }, undefined, { shallow: true });
  };

  const removeUrlParam = (key: string) => {
    // Remove the specified URL parameter from the query object
    const query = { ...router.query };
    delete query[key];
    router.push({ pathname: router.pathname, query }, undefined, { shallow: true });
  };

  return { getUrlParam, setUrlParam, removeUrlParam, setUrlParams };
};

export default useUrlParams;
