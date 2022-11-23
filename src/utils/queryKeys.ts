import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { getComments } from '../modules/inbox/getComments';
import { getPosts, GetPostsParams } from '../modules/inbox/getPosts';
import { Post } from '../modules/inbox/types';

export const queries = createQueryKeyStore({
	posts: {
		list: (params: GetPostsParams) => ({
			queryKey: [{ ...params }],
			queryFn: () => getPosts(params)
		})
	},
	comments: {
		byPostId: (params: Pick<Post, 'id'>) => ({
			queryKey: [{ ...params }],
			queryFn: () => getComments({ id: params.id })
		})
	}
});
