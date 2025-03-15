import type { JSX } from 'react';
import { createBrowserRouter } from 'react-router';

import RequireAuth from '@/features/auth/RequireAuth';
import { GlobalLayout } from '@/layout';
import { Home, NotFound, RouterErrorBoundary } from '@/pages';
import type { RoleType } from '@/types/user';

import User from '@/pages/User';

interface RouteConfig {
	path: string;
	element: JSX.Element;
	allowedRoles: RoleType[];
	label?: string;
}

export const routes: RouteConfig[] = [
	{
		path: '/',
		element: <Home />,
		allowedRoles: ['admin', 'manager', 'viewer'],
		label: '홈',
	},
	{
		path: '/campaigns',
		element: <></>,
		allowedRoles: ['admin', 'manager', 'viewer'],
		label: '캠페인',
	},
	{
		path: '/users',
		element: <User />,
		allowedRoles: ['admin'],
		label: '사용자',
	},
];

export const routers = createBrowserRouter([
	{
		path: '/',
		errorElement: <RouterErrorBoundary />,
		element: <GlobalLayout />,
		children: [
			...routes.map((page) => ({
				path: page.path,
				element: (
					<RequireAuth allowedRoles={page.allowedRoles}>
						{page.element}
					</RequireAuth>
				),
			})),
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
