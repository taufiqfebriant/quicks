import { useState } from 'react';
import { Icon } from '../../components/Icon';

const menus = ['messages', 'message'] as const;
type Menu = typeof menus[number];

export const Inbox = () => {
	const [menu, setMenu] = useState<Menu>('messages');

	return (
		<div className="h-[31.25rem] w-[45.875rem] overflow-y-auto rounded-md bg-white">
			{menu === 'messages' ? (
				<div className="py-6 px-8">
					<input
						type="text"
						placeholder="Search"
						className="h-8 w-full rounded-[.313rem] border border-[#828282] px-[58.82px] placeholder-[#333333]"
					/>

					<article className="flex flex-col divide-y divide-[#828282]">
						{[...Array(4).keys()].map(number => (
							<button
								type="button"
								onClick={() => setMenu('message')}
								key={number}
								className="flex py-[1.375rem] text-left text-[#4F4F4F]"
							>
								<div className="flex w-[3.1875rem]">
									<div className="relative z-0 flex h-[2.125rem] w-[2.125rem] items-center rounded-full bg-[#E0E0E0] text-black">
										<Icon id="person" className="h-3" fill="currentColor" />
									</div>

									<div className="relative -left-[1.0625rem] z-10 flex h-[2.125rem] w-[2.125rem] items-center rounded-full bg-[#2F80ED] text-white">
										<Icon id="person" className="h-3" fill="currentColor" />
									</div>
								</div>

								<div className="ml-[1.0625rem]">
									<h1 className="font-bold text-[#2F80ED]">109220-Naturalization</h1>
									<p className="text-sm font-bold">Cameron Phillips :</p>
									<p className="text-sm">Please check this out!</p>
								</div>

								<p className="ml-4 text-sm">January 1, 2021 19:10</p>
							</button>
						))}
					</article>
				</div>
			) : null}

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
