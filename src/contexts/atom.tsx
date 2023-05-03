import { Provider } from 'jotai';

type Props = {
  children: React.ReactNode;
};

function AtomProviders({ children }: Props) {
  return <Provider>{children}</Provider>;
}

export default AtomProviders;
