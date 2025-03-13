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

export type BackOfficeUserRole = 'admin' | 'manager' | 'viewer';

export interface ServiceUser {
	id: number;
	email: string;
	name: string;
	last_login_at: string; // "2022-11-14T07:37:24.914Z"
}
