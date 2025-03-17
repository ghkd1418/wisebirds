import type { JSX, ReactNode } from 'react';

import clsx from 'clsx';

import * as styles from './Typography.css';

export interface TypographyProps {
	variant?: keyof typeof styles.typographyVariants;
	className?: string;
	children: ReactNode;
}

export function Typography({
	variant = 'body',
	className,
	children,
}: TypographyProps) {
	const Tag = ['h1', 'h2', 'h3', 'h4'].includes(variant as string)
		? (variant as keyof JSX.IntrinsicElements)
		: 'span';

	return (
		<Tag
			className={clsx(
				styles.baseStyle,
				styles.typographyVariants[variant],
				className,
			)}
		>
			{children}
		</Tag>
	);
}
