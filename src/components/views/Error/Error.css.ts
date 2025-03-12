import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const container = style([
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
		gap: '4x',
		padding: '4x',
		textAlign: 'center',
		alignItems: 'center',
	}),
]);

export const title = style([
	sprinkles({
		fontSize: '3x',
	}),
	{
		fontWeight: 'bold',
	},
]);

export const description = style([
	sprinkles({
		fontSize: '3x',
		color: 'secondary',
	}),
	{
		fontWeight: 'bold',
	},
]);

export const button = style([
	sprinkles({
		borderRadius: '2x',
		background: 'primary',
		padding: '1x',
		color: 'white',
		fontSize: '2x',
	}),
	{
		border: 'solid 1px',
		width: 'min(8%, 50%)',
		fontWeight: 'bold',
		minWidth: 'fit-content',
		cursor: 'pointer',

		':hover': {
			opacity: 0.9,
		},
	},
]);
