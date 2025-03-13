import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const container = style([
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
		gap: '4x',
		padding: '4x',
		alignItems: 'center',
	}),
]);

export const title = style([
	sprinkles({
		fontSize: '5x',
	}),
	{
		color: 'black',
		fontWeight: 900,
	},
]);

export const subTitle = style([
	sprinkles({
		fontSize: '3x',
	}),
	{
		color: 'black',
		fontWeight: 700,
	},
]);
