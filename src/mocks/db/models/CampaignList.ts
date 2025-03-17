import { CAMPAIGN_OBJECTIVES } from '@/constants/campaign';
import type { Campaign, CampaignResponse } from '@/types/campaign';
import { faker } from '@faker-js/faker';

export function CampaignList(
	totalElements: number,
	pageNumber: number,
	pageSize: number,
): CampaignResponse {
	const totalPages = Math.ceil(totalElements / pageSize);
	const startIdx = pageNumber * pageSize;
	const endIdx = Math.min(startIdx + pageSize, totalElements);

	const campaigns: Campaign[] = Array.from(
		{ length: endIdx - startIdx },
		(_, index) => ({
			id: startIdx + index + 1,
			name: `캠페인${startIdx + index + 1}`,
			campaign_objective: faker.helpers.arrayElement(
				Object.values(
					CAMPAIGN_OBJECTIVES,
				) as unknown as (keyof typeof CAMPAIGN_OBJECTIVES)[],
			),
			enabled: faker.datatype.boolean(),
			impressions: faker.number.int(999999),
			clicks: faker.number.int(9999),
			ctr: faker.number.float({ fractionDigits: 4 }),
			video_views: faker.number.int(999),
			vtr: faker.number.float({ fractionDigits: 4 }),
		}),
	);

	return {
		content: campaigns,
		total_elements: totalElements,
		total_pages: totalPages,
		first: pageNumber === 0,
		last: pageNumber === totalPages - 1,
		number: pageNumber,
		size: pageSize,
		sort: {}, // 필요시 정렬 기준 추가
		number_of_elements: campaigns.length,
		empty: campaigns.length === 0,
	};
}
