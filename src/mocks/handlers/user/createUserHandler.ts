import { HttpResponse, http } from 'msw';

export const createUserHandler = http.post(
	`${import.meta.env.VITE_API_BASE_URL}/users`,
	async () => {
		return HttpResponse.json({ result: true, id: 1 }, { status: 200 });
	},
);
