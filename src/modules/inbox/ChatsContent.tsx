import { useInfiniteQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import * as dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import { Icon } from '../../components/Icon';
import { queries } from '../../utils/queryKeys';
import { menuAtom, selectedPostAtom } from './atoms';

export const ChatsContent = () => {
	const [, setMenu] = useAtom(menuAtom);
	const [, setSelectedPost] = useAtom(selectedPostAtom);
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

	const handlePostClick = (post: typeof posts['data']['pages'][number][number]) => {
		setSelectedPost(post);
		setMenu('message');
	};

	return posts.data?.pages.length ? (
		<article className="flex flex-col divide-y divide-[#828282]">
			{posts.data.pages.map((page, index) => (
				<Fragment key={index}>
					{page.length
						? page.map(post => (
								<button
									type="button"
									onClick={() => handlePostClick(post)}
									key={post.id}
									className="relative flex py-[1.375rem] text-left text-[#4F4F4F]"
								>
									<div
										className={clsx('flex w-[3.1875rem] shrink-0', {
											'justify-center': post.category === 'personal'
										})}
									>
										{post.category === 'group' ? (
											<>
												<div className="relative z-0 flex h-[2.125rem] w-[2.125rem] items-center rounded-full bg-[#E0E0E0] text-black">
													<Icon id="person" className="h-3" fill="currentColor" />
												</div>

												<div className="relative -left-[1.0625rem] z-10 flex h-[2.125rem] w-[2.125rem] items-center rounded-full bg-[#2F80ED] text-white">
													<Icon id="person" className="h-3" fill="currentColor" />
												</div>
											</>
										) : (
											<div className="flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full bg-[#2F80ED] text-white">
												{post.comments[post.comments.length - 1].name.charAt(0)}
											</div>
										)}
									</div>

									<div className="ml-[1.0625rem] min-w-0">
										<div className="flex items-center gap-x-4">
											<h1 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold text-[#2F80ED]">
												{post.category === 'group'
													? post.title
													: post.comments[post.comments.length - 1].name}
											</h1>

											<p className="shrink-0 text-sm">
												{dayjs(post.comments[post.comments.length - 1].date).format(
													'DD/MM/YYYY HH:mm'
												)}
											</p>
										</div>

										{post.category === 'group' ? (
											<p className="text-sm font-bold">
												{post.comments[post.comments.length - 1].name} :
											</p>
										) : null}

										<p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
											{post.comments[post.comments.length - 1].body}
										</p>
									</div>

									{post.comments[post.comments.length - 1].readedAt === null ? (
										<div className="absolute right-0 top-1/2 h-[.625rem] w-[.625rem] -translate-y-1/2 rounded-full bg-[#EB5757]" />
									) : null}
								</button>
						  ))
						: null}
				</Fragment>
			))}
		</article>
	) : null;
};
