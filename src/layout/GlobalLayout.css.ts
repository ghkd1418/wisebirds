import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const container = style([
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
	}),
	{
		minHeight: '100dvh',
		margin: '0 auto',
	},
]);

export const main = style([
	{
		flexGrow: 1,
	},
]);
