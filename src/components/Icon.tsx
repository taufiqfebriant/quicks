import { ComponentPropsWithoutRef } from 'react';

const icons = [
	'lightning',
	'question-answer',
	'chrome-reader-mode',
	'person',
	'arrow-left',
	'close',
	'spinner'
] as const;
export type Icon = typeof icons[number];

interface IconProps extends ComponentPropsWithoutRef<'svg'> {
	id: Icon;
}

export const Icon = (props: IconProps) => {
	const { id, ...restProps } = props;

	return (
		<svg {...restProps}>
			<use href={`/images/sprite.svg#icon-${id}`} />
		</svg>
	);
};
