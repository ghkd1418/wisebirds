import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const popoverContainer = style({
	position: 'relative',
	display: 'inline-block',
});

export const popoverTrigger = style([
	sprinkles({}),
	{
		color: 'white',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',

		':hover': {
			opacity: '0.8',
		},
	},
]);

export const popoverContent = style([
	sprinkles({
		padding: '1x',
		borderRadius: '1x',
	}),
	{
		position: 'absolute',
		top: '100%',
		left: '50%',
		transform: 'translateX(-50%)',
		marginTop: '10%',
		backgroundColor: 'white',
		border: '1px solid #ccc',
		boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',

		zIndex: 1000,
		whiteSpace: 'nowrap',
	},
]);
