import { DefaultLayout } from '@/components';
import { useRouter } from 'next/router';

const Custom500 = () => {
  const { query } = useRouter();
  const { message } = query;

  return <DefaultLayout>{message}</DefaultLayout>;
};

export default Custom500;
