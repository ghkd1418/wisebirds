import type { CampaignResponse } from '@/types/campaign';
import { useQuery } from '@tanstack/react-query';

import api from '../api';
import { queryKey } from '../queryKey';

const getCampaignList = async (page: number, size: number) => {
	const response = await api
		.get(`campaigns?page=${page}&size=${size}`)
		.json<CampaignResponse>();

	return response;
};

export const useGetCampaignList = (page: number, size: number) => {
	return useQuery<CampaignResponse>({
		queryKey: queryKey.campaigns(page, size),
		queryFn: () => getCampaignList(page, size),
	});
};
