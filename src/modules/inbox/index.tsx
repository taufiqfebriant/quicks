import { useAtom } from 'jotai';
import { menuAtom, selectedPostAtom } from './atoms';
import { Message } from './Message';
import { Messages } from './Messages';

export const Inbox = () => {
	const [menu] = useAtom(menuAtom);
	const [selectedPost] = useAtom(selectedPostAtom);

	return (
		<div className="h-[31.25rem] w-[45.875rem] overflow-y-auto rounded-md bg-white">
			{menu === 'messages' ? <Messages /> : null}
			{menu === 'message' && selectedPost ? <Message post={selectedPost} /> : null}
		</div>
	);
};
