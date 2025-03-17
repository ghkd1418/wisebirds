import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const switchStyle = style({
	width: '60px',
	height: '26px',
	backgroundColor: '#ccc',
	position: 'relative',
	borderRadius: '34px',
	cursor: 'pointer',
	transition: 'background-color 0.3s ease-in-out',
	display: 'flex',
	alignItems: 'center',
	padding: '2px',
});

export const checkedStyle = style({
	backgroundColor: vars.color.primary,
});

export const switchHandle = style({
	width: '22px',
	height: '22px',
	borderRadius: '50%',
	backgroundColor: 'white',
	position: 'absolute',
	left: '2px',
	transition: 'transform 0.3s ease-in-out',
	transform: 'translateX(0)',
});

export const switchHandleChecked = style({
	transform: 'translateX(34px)',
});
