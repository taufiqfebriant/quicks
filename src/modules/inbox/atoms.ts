import { atom } from 'jotai';
import { ModifiedPost } from './getPosts';

const menus = ['messages', 'message'] as const;
type Menu = typeof menus[number];

export const menuAtom = atom<Menu>('messages');

export const selectedPostAtom = atom<ModifiedPost | null>(null);
