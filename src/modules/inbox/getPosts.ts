import { Comment, Post } from './types';

export type GetPostsParams = {
	page: number;
	limit: number;
};

const chatCategories = ['personal', 'group'] as const;
type ChatCategory = typeof chatCategories[number];

type PostWithComments = Post & { comments: Comment[] };

export type ModifiedPost = Post & {
	comments: (Comment & { date: string; readedAt: string | null })[];
	category: ChatCategory;
};

export const getPosts = async (params: GetPostsParams) => {
	const queryString = new URLSearchParams({
		_embed: 'comments',
		_page: `${params.page}`,
		_limit: `${params.limit}`
	});

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${queryString}`, {
		method: 'GET'
	});

	if (!response.ok) throw new Error('Failed to get posts');

	const jsonResponse: PostWithComments[] = await response.json();
	let date = new Date();

	const newPosts: ModifiedPost[] = jsonResponse.map(({ comments, ...rest }, index) => {
		const category = index <= 2 ? 'group' : 'personal';

		const newComments: ModifiedPost['comments'] = comments.map(comment => {
			date = new Date(date.getTime() - 1000 * 60 * 5);
			const readedAt = index === 0 ? null : new Date().toISOString();

			return { ...comment, date: date.toISOString(), readedAt };
		});

		return { ...rest, category, comments: newComments };
	});

	return newPosts;
};
