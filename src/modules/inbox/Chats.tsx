import { ChatsContent } from './ChatsContent';

export const Chats = () => {
	return (
		<div className="flex h-full flex-col py-6 px-8">
			<input
				type="text"
				placeholder="Search"
				className="h-8 w-full shrink-0 rounded-[.313rem] border border-[#828282] px-[58.82px] placeholder-[#333333]"
			/>

			<ChatsContent />
		</div>
	);
};
