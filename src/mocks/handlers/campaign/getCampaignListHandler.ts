import { CampaignList } from '@/mocks/db/models/CampaignList';
import { HttpResponse, http } from 'msw';

export const getCampaignListHandler = http.get(
	`${import.meta.env.VITE_API_BASE_URL}/campaigns`,
	async ({ request }) => {
		const url = new URL(request.url);
		const page = Number(url.searchParams.get('page')) || 0;
		const size = Number(url.searchParams.get('size')) || 25;

		return HttpResponse.json(CampaignList(200, page, size), { status: 200 });
	},
);
