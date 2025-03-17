export const queryKey = {
	all: () => ['all'],
	myInfo: () => [...queryKey.all(), 'myInfo'],
};
