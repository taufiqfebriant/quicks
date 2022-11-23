import { Post } from './types';

export type GetPostsParams = {
	page: number;
	limit: number;
};

export const getPosts = async (params: GetPostsParams): Promise<Post[]> => {
	const queryString = new URLSearchParams({
		_page: `${params.page}`,
		_limit: `${params.limit}`
	});

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${queryString}`, {
		method: 'GET'
	});

	if (!response.ok) throw new Error('Failed to get posts');

	return response.json();
};
