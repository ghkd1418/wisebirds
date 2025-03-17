/**
 * ISO 형식의 날짜 문자열을 'YYYY-MM-DD HH:mm:ss' 형식으로 변환
 * @param isoString ISO 형식의 날짜 문자열
 * @returns 변환된 날짜 문자열
 */
export const formatDateTime = (isoString: string) => {
	const date = new Date(isoString);

	if (isNaN(date.getTime())) {
		throw new Error('Invalid date format');
	}

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
