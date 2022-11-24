import { atom } from 'jotai';

export const options = ['inbox', 'task'] as const;
export type Option = typeof options[number];

export const selectedOptionAtom = atom<Option | null>(null);
