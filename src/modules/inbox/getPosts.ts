import { Comment, Post } from './types';

export type GetPostsParams = {
	page: number;
	limit: number;
};

const chatCategories = ['personal', 'group'] as const;
type ChatCategory = typeof chatCategories[number];

type PostWithComments = Post & { comments: Comment[] };

type ModifiedPost = Post & { lastComment: Comment & { date: string }; category: ChatCategory };

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

	const newPosts: ModifiedPost[] = jsonResponse.map(({ comments, ...rest }) => {
		const category = chatCategories[Math.floor(Math.random() * chatCategories.length)];
		date = new Date(date.getTime() - 1000 * 60 * 5);

		const lastComment: ModifiedPost['lastComment'] = {
			...comments[comments.length - 1],
			date: date.toISOString()
		};

		return { ...rest, category, lastComment };
	});

	return newPosts;
};
