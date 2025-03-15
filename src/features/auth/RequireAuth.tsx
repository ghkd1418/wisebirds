import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useRoleStore } from '@/store/role';
import type { RoleType } from '@/types/user';
import { toast } from 'react-toastify';

type RequireAuthProps = {
	allowedRoles: RoleType[];
	redirectPath?: string;
	children?: React.ReactNode;
};

const RequireAuth = ({
	allowedRoles,
	redirectPath = '/',
	children,
}: RequireAuthProps) => {
	const navigate = useNavigate();
	const { role } = useRoleStore();

	useEffect(() => {
		if (!allowedRoles.includes(role)) {
			toast.warn(
				<div>
					접근 권한이 없습니다.
					<br />
					접근 가능 페이지로 이동합니다.
				</div>,
			);
			navigate(redirectPath, { replace: true });
		}
	}, [role, allowedRoles, navigate]);

	return children;
};

export default RequireAuth;
