export interface BackOfficeUser {
	id: number;
	email: string;
	name: string;
	company: {
		id: number;
		name: string;
	};
	role: BackOfficeUserRole;
}

export const BACK_OFFICE_ROLES = ['어드민', '매니저', '뷰어'] as const;
export type BackOfficeUserRole = (typeof BACK_OFFICE_ROLES)[number];

export interface ServiceUser {
	id: number;
	email: string;
	name: string;
	last_login_at: string; // "2022-11-14T07:37:24.914Z"
}
