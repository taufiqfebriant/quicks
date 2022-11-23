import { atom } from 'jotai';
import { Post } from './types';

const menus = ['messages', 'message'] as const;
type Menu = typeof menus[number];

export const menuAtom = atom<Menu>('messages');

export const selectedPostAtom = atom<Post | null>(null);
