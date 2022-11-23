import { useAtom } from 'jotai';
import { menuAtom, selectedPostAtom } from './atoms';
import { Chats } from './Chats';
import { Message } from './Message';

export const Inbox = () => {
	const [menu] = useAtom(menuAtom);
	const [selectedPost] = useAtom(selectedPostAtom);

	return (
		<div className="h-[31.25rem] w-[45.875rem] overflow-y-auto rounded-md bg-white">
			{menu === 'messages' ? <Chats /> : null}
			{menu === 'message' && selectedPost ? <Message post={selectedPost} /> : null}
		</div>
	);
};
