import { useAtom } from 'jotai';
import { Icon } from '../../components/Icon';
import { menuAtom } from './atoms';
import { ModifiedPost } from './getPosts';
import { MessagesContent } from './MessagesContent';

type Params = {
	post: ModifiedPost;
};

export const Messages = (params: Params) => {
	const [, setMenu] = useAtom(menuAtom);

	return (
		<div className="flex h-full flex-col">
			<div className="sticky top-0 flex items-center border-b border-[#BDBDBD] py-6 px-8">
				<button
					type="button"
					onClick={() => setMenu('messages')}
					className="h-4 w-4 text-[#333333]"
				>
					<Icon id="arrow-left" fill="currentColor" className="h-full w-full" />
				</button>

				<header className="ml-[18.33px] flex-1">
					<h1 className="font-bold text-[#2F80ED]">{params.post.title}</h1>

					<p className="text-xs text-[#333333]">3 participants</p>
				</header>

				<button type="button" className="h-3.5 w-3.5 text-[#333333]">
					<Icon id="close" fill="currentColor" className="h-full w-full" />
				</button>
			</div>

			<MessagesContent id={params.post.id} />
		</div>
	);
};
