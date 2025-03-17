import { style } from '@vanilla-extract/css';

export const tableContainer = style({
	width: '100%',
	borderCollapse: 'collapse',
});

export const tableHeader = style({
	backgroundColor: '#f5f5f5',
	fontWeight: 'bold',
	padding: '10px',
	textAlign: 'center',
});

export const tableRow = style({
	borderBottom: '1px solid #ddd',
});

export const tableCell = style({
	padding: '10px',
	textAlign: 'center',
});

export const centerAligned = style({
	textAlign: 'center',
	maxWidth: '50px',
});

export const rightAligned = style({
	textAlign: 'right',
});

export const paginationContainer = style({
	display: 'flex',
	justifyContent: 'center',
	marginTop: '10px',
});

export const paginationButton = style({
	margin: '0 10px',
});
