import ky, { HTTPError } from 'ky';

const api = ky.create({
	prefixUrl: `${import.meta.env.VITE_API_BASE_URL}`,
	timeout: 5000,
	retry: 3,
});

interface ErrorResponse {
	trID: string; // 에러 추적용 ID
	message?: string; // 에러 메시지
}

const extendedApi = api.extend({
	hooks: {
		beforeRequest: [() => {}],
		afterResponse: [
			async (_request, _options, response) => {
				if (response.ok) {
					return await response.json();
				}
			},
		],
		beforeRetry: [
			async ({ error, retryCount }) => {
				// 마지막 재시도에서만 에러 던지기
				if (retryCount === 3) {
					if (error instanceof HTTPError) {
						const errorData: ErrorResponse = await error.response.json();

						console.error(
							`beforeError Error Trace ID: ${errorData.trID} message: ${
								errorData.message ||
								'Unexpected server error. Please try again later.'
							}`,
						);
					}

					throw error;
				}
			},
		],
	},
});

export default extendedApi;
