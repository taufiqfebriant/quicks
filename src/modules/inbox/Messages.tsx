import { useInfiniteQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import { Icon } from '../../components/Icon';
import { queries } from '../../utils/queryKeys';
import { menuAtom } from './atoms';

export const Messages = () => {
	const [, setMenu] = useAtom(menuAtom);
	const posts = useInfiniteQuery(queries.posts.list({ page: 1, limit: 10 }));

	if (posts.isLoading) {
		return <p>Loading...</p>;
	}

	if (posts.isError) {
		return <p>Something went wrong.</p>;
	}

	return (
		<div className="py-6 px-8">
			<input
				type="text"
				placeholder="Search"
				className="h-8 w-full rounded-[.313rem] border border-[#828282] px-[58.82px] placeholder-[#333333]"
			/>

			{posts.data?.pages.length ? (
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

											<div className="ml-[1.0625rem]">
												<h1 className="font-bold text-[#2F80ED]">{post.title}</h1>
												<p className="text-sm font-bold">Cameron Phillips :</p>
												<p className="text-sm">Please check this out!</p>
											</div>

											<p className="ml-4 text-sm">January 1, 2021 19:10</p>
										</button>
								  ))
								: null}
						</Fragment>
					))}
				</article>
			) : null}
		</div>
	);
};
