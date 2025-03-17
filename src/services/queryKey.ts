export const queryKey = {
	all: () => ['all'],
	myInfo: () => [...queryKey.all(), 'myInfo'],
	campaigns: (page: number, size: number) => [
		...queryKey.all(),
		'campaigns',
		page,
		size,
	],
};
