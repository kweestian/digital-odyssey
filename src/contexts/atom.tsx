import { Provider, atom } from 'jotai';

type Props = {
  children: React.ReactNode;
};

function AtomProviders({ children }: Props) {
  return <Provider>{children}</Provider>;
}

export const popinAtom = atom(false);

export default AtomProviders;
