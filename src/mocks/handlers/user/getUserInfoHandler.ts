import { UserInfo } from '@/mocks/db/models/UserInfo';
import { HttpResponse, http } from 'msw';

export const getUserInfoHandler = http.get(
	`${import.meta.env.VITE_API_BASE_URL}/auth/me`,
	async () => {
		return HttpResponse.json(UserInfo, { status: 200 });
	},
);
