import { useInfiniteQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import { Icon } from '../../components/Icon';
import { queries } from '../../utils/queryKeys';
import { menuAtom } from './atoms';

export const MessagesContent = () => {
	const [, setMenu] = useAtom(menuAtom);
	const posts = useInfiniteQuery(queries.posts.list({ page: 1, limit: 5 }));

	if (posts.isLoading) {
		return (
			<div className="flex flex-1 items-center justify-center">
				<div className="flex flex-col items-center">
					<div role="status">
						<Icon
							id="spinner"
							className="h-[60px] w-[60px] animate-spin fill-[#C4C4C4] text-[#F8F8F8]"
						/>
						<span className="sr-only">Loading...</span>
					</div>

					<p className="mt-[12.7px] font-bold text-[#4F4F4F]">Loading Chats ...</p>
				</div>
			</div>
		);
	}

	if (posts.isError) {
		return <p>Something went wrong.</p>;
	}

	return posts.data?.pages.length ? (
		<article className="flex flex-col divide-y divide-[#828282]">
			{posts.data.pages.map((page, index) => (
				<Fragment key={index}>
					{page.length
						? page.map(post => (
								<button
									type="button"
									onClick={() => setMenu('message')}
									key={post.id}
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

									<div className="ml-[1.0625rem] overflow-hidden">
										<h1 className="font-bold text-[#2F80ED]">{post.title}</h1>
										<p className="text-sm font-bold">Cameron Phillips :</p>
										<p className="text-ellipsis whitespace-nowrap text-sm">{post.body}</p>
									</div>

									<p className="ml-4 shrink-0 text-sm">January 1, 2021 19:10</p>
								</button>
						  ))
						: null}
				</Fragment>
			))}
		</article>
	) : null;
};
