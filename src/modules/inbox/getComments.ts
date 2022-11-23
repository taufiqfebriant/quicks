import { Post } from './types';

export const getComments = async (params: Pick<Post, 'id'>) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`, {
		method: 'GET'
	});

	if (!response.ok) throw new Error('Failed to get comments');

	return response.json();
};
