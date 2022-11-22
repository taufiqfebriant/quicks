import { useAtom } from 'jotai';
import { Icon } from '../../components/Icon';
import { menuAtom } from './atoms';
import { Messages } from './Messages';

export const Inbox = () => {
	const [menu, setMenu] = useAtom(menuAtom);

	return (
		<div className="h-[31.25rem] w-[45.875rem] overflow-y-auto rounded-md bg-white">
			{menu === 'messages' ? <Messages /> : null}

			{menu === 'message' ? (
				<div className="flex items-center border-b border-[#BDBDBD] py-6 px-8">
					<button
						type="button"
						onClick={() => setMenu('messages')}
						className="h-4 w-4 text-[#333333]"
					>
						<Icon id="arrow-left" fill="currentColor" className="h-full w-full" />
					</button>

					<header className="ml-[18.33px] flex-1">
						<h1 className="font-bold text-[#2F80ED]">
							I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
						</h1>

						<p className="text-xs text-[#333333]">3 participants</p>
					</header>

					<button type="button" className="h-3.5 w-3.5 text-[#333333]">
						<Icon id="close" fill="currentColor" className="h-full w-full" />
					</button>
				</div>
			) : null}
		</div>
	);
};
