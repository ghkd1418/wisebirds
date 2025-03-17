import type { ServiceUser, ServiceUserResponse } from '@/types/user';
import { faker } from '@faker-js/faker';

export function UserList(
	totalElements: number,
	pageNumber: number,
	pageSize: number,
): ServiceUserResponse {
	const totalPages = Math.ceil(totalElements / pageSize);
	const startIdx = pageNumber * pageSize;
	const endIdx = Math.min(startIdx + pageSize, totalElements);

	const campaigns: ServiceUser[] = Array.from(
		{ length: endIdx - startIdx },
		(_, index) => ({
			id: startIdx + index + 1,
			name: `사용자${startIdx + index + 1}`,
			email: faker.internet.email(),
			last_login_at: faker.date.past().toISOString(),
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
