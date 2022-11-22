import { atom } from 'jotai';

const menus = ['messages', 'message'] as const;
type Menu = typeof menus[number];

export const menuAtom = atom<Menu>('messages');
