import type { BackOfficeUser } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

import api from '../api';
import { queryKey } from '../queryKey';

const getUserInfo = async () => {
	const response = await api.get('auth/me').json<BackOfficeUser>();

	return response;
};

export const useGetUserInfo = () => {
	return useQuery<BackOfficeUser>({
		queryKey: queryKey.myInfo(),
		queryFn: () => getUserInfo(),
	});
};
