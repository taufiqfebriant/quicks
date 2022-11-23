import { useQuery } from '@tanstack/react-query';
import { Icon } from '../../components/Icon';
import { queries } from '../../utils/queryKeys';
import { Post } from './types';

export const MessageContent = (params: Pick<Post, 'id'>) => {
	const comments = useQuery(
		queries.comments.byPostId({
			id: params.id
		})
	);

	if (comments.isLoading) {
		return (
			<div className="flex flex-1 items-center justify-center">
				<div className="flex flex-col items-center gap-y-[12.7px]">
					<div role="status">
						<Icon
							id="spinner"
							className="h-[60px] w-[60px] animate-spin fill-[#C4C4C4] text-[#F8F8F8]"
						/>
						<span className="sr-only">Loading...</span>
					</div>

					<p className="font-bold text-[#4F4F4F]">Loading Messages ...</p>
				</div>
			</div>
		);
	}

	if (comments.isError) {
		return <p>Something went wrong.</p>;
	}

	return <h1>Testing</h1>;
};
