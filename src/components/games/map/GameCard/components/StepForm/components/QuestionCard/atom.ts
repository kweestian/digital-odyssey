import { atom } from 'jotai';

type StepFormState = {
  [key: string]: string | undefined;
};

type Score = number | undefined;

export const stepFormAtom = atom<StepFormState>({});

export const scoreAtom = atom<Score>(undefined);
