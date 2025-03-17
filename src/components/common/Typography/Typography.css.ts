import { style, styleVariants } from '@vanilla-extract/css';

export const baseStyle = style({
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	whiteSpace: 'nowrap',
	borderRadius: '0.375rem',
	fontSize: '0.875rem',
	fontWeight: 500,
	transition: 'color 0.2s',
	selectors: {
		'&:focus-visible': {
			outline: 'none',
			boxShadow: '0 0 0 1px var(--ring-color)',
		},
		'&:disabled': {
			pointerEvents: 'none',
			opacity: 0.5,
		},
	},
});

export const typographyVariants = styleVariants({
	h1: {
		scrollMargin: '20px',
		fontSize: '2.25rem',
		fontWeight: 800,
		letterSpacing: '-0.02em',
		'@media': {
			'screen and (min-width: 1024px)': {
				fontSize: '3rem',
			},
		},
	},
	h2: {
		scrollMargin: '20px',
		fontSize: '1.875rem',
		fontWeight: 700,
	},
	h3: {
		scrollMargin: '20px',
		fontSize: '1.5rem',
		fontWeight: 600,
	},
	h4: {
		scrollMargin: '20px',
		fontSize: '1.25rem',
		fontWeight: 600,
	},
	body: {
		fontSize: '1rem',
	},
	caption1: {
		fontSize: '0.875rem',
	},
	caption2: {
		fontSize: '0.75rem',
	},
});
