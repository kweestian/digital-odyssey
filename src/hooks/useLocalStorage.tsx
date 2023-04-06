export default () => {
  const getItem = (key: string) => window.localStorage.getItem(key);
  const setItem = (key: string, value: string) => window.localStorage.setItem(key, value);

  return { getItem, setItem };
};
