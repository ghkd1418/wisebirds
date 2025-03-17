import { UserList } from '@/mocks/db/models/UserList';
import { HttpResponse, http } from 'msw';

export const getUserListHandler = http.get(
	`${import.meta.env.VITE_API_BASE_URL}/users`,
	async ({ request }) => {
		const url = new URL(request.url);
		const page = Number(url.searchParams.get('page')) || 0;
		const size = Number(url.searchParams.get('size')) || 25;

		return HttpResponse.json(UserList(200, page, size), { status: 200 });
	},
);
