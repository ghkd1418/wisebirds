import type { ServiceUserResponse } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

import api from '../api';

const getUserList = async (
	page: number,
	size: number,
): Promise<ServiceUserResponse> => {
	const response = await api
		.get(`users?page=${page}&size=${size}`)
		.json<ServiceUserResponse>();
	return response;
};

export const useUserList = (page: number, size: number) => {
	return useQuery<ServiceUserResponse>({
		queryKey: ['users', page, size],
		queryFn: () => getUserList(page, size),
	});
};
