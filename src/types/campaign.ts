import type { CAMPAIGN_OBJECTIVES } from '@/constants/campaign';

export interface Campaign {
	id: number;
	enabled: boolean;
	name: string;
	campaign_objective: keyof typeof CAMPAIGN_OBJECTIVES;
	impressions: number;
	clicks: number;
	ctr: number;
	video_views: number;
	vtr: number;
}

export interface CampaignResponse {
	content: Campaign[];
	total_elements: number;
	total_pages: number;
	first: boolean;
	last: boolean;
	number: number;
	size: number;
	sort: object;
	number_of_elements: number;
	empty: boolean;
}
