import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { Icon } from '../../components/Icon';
import { selectedOptionAtom } from '../../utils/atoms';
import { menuAtom, selectedPostAtom } from './atoms';

export const Messages = () => {
	const [, setMenu] = useAtom(menuAtom);
	const [selectedPost] = useAtom(selectedPostAtom);
	const [, setSelectedOption] = useAtom(selectedOptionAtom);

	return (
		<div className="flex h-full flex-col">
			<div className="sticky top-0 flex items-center border-b border-[#BDBDBD] bg-white py-6 px-8">
				<button
					type="button"
					onClick={() => setMenu('messages')}
					className="h-4 w-4 text-[#333333]"
				>
					<Icon id="arrow-left" fill="currentColor" className="h-full w-full" />
				</button>

				<header className="ml-[18.33px] flex-1">
					<h1 className="font-bold text-[#2F80ED]">{selectedPost?.title}</h1>

					<p className="text-xs text-[#333333]">3 participants</p>
				</header>

				<button
					type="button"
					className="h-3.5 w-3.5 text-[#333333]"
					onClick={() => setSelectedOption(null)}
				>
					<Icon id="close" fill="currentColor" className="h-full w-full" />
				</button>
			</div>

			<div className="px-8 text-[#4F4F4F]">
				{selectedPost?.comments.map(comment => (
					<div key={comment.id} className="my-[10.22px] flex max-w-lg flex-col gap-y-[4.65px]">
						<h2 className="font-bold text-[#E5A443]">{comment.name}</h2>

						<div className="flex flex-col gap-y-3 rounded-md bg-[#FCEED3] p-[.625rem] text-sm">
							<p>{comment.body}</p>
							<p>{dayjs(comment.date).format('HH:mm')}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
