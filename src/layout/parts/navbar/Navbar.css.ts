import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const navStyle = style([
	sprinkles({
		display: 'flex',
		background: 'primary',
		padding: '1x',
	}),
	{
		justifyContent: 'space-between',
	},
]);

export const ulStyle = style([
	sprinkles({
		display: 'flex',
		alignItems: 'center',
		gap: '2x',
	}),
]);

export const dividerStyle = style({
	width: '1px',
	height: '18px',
	backgroundColor: '#ddd',
});

export const boldStyle = style({
	fontWeight: 'bold',
	color: 'white',
});

export const userStyle = style([
	sprinkles({
		display: 'flex',
		alignItems: 'center',
		gap: '4x',
	}),
]);
