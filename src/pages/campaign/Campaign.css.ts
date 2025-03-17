import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const container = style([sprinkles({})]);

export const title = style([
	sprinkles({
		padding: '2x',
	}),
	{
		color: 'black',
		fontWeight: 900,
	},
]);
