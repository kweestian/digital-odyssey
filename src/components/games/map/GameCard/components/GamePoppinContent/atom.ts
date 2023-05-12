import { atom } from 'jotai';

export const interactionAtom = atom<'quiz' | 'bonus' | 'keyLearning' | null>(null);
