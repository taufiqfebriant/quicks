import { useAtom } from 'jotai';
import { Icon } from '../../components/Icon';
import { searchAtom } from './atoms';
import { ChatsContent } from './ChatsContent';

export const Chats = () => {
	const [, setSearch] = useAtom(searchAtom);

	return (
		<div className="flex h-full flex-col py-6 px-8">
			<div className="sticky top-6 z-50 flex h-8 shrink-0 overflow-hidden rounded-[.313rem] border border-[#828282] bg-white">
				<input
					type="text"
					placeholder="Search"
					className="flex-1 pl-[58.82px] text-[#333333] placeholder-[#333333] outline-none"
					onChange={e => setSearch(e.target.value)}
				/>

				<span className="flex items-center pr-[58.82px] pl-2">
					<Icon id="search" className="h-3 w-3" />
				</span>
			</div>

			<ChatsContent />
		</div>
	);
};
