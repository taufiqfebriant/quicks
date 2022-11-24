import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { getPosts, GetPostsParams } from '../modules/inbox/getPosts';

export const queries = createQueryKeyStore({
	posts: {
		list: (params: GetPostsParams) => ({
			queryKey: [{ ...params }],
			queryFn: () => getPosts(params)
		})
	}
});
