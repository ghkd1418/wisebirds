import type { JSX } from 'react';
import { createBrowserRouter } from 'react-router';

import { GlobalLayout } from '@/layout';
import { Home, NotFound, RouterErrorBoundary } from '@/pages';
import type { BackOfficeUserRole } from '@/types/user';

interface RouteConfig {
	path: string;
	element: JSX.Element;
	allowedRoles: BackOfficeUserRole[];
	label?: string;
}

export const routes: RouteConfig[] = [
	{
		path: '/',
		element: <Home />,
		allowedRoles: ['어드민', '매니저', '뷰어'],
		label: '홈',
	},
	{
		path: '/campaigns',
		element: <></>,
		allowedRoles: ['어드민', '매니저', '뷰어'],
		label: '캠페인',
	},
	{
		path: '/users',
		element: <></>,
		allowedRoles: ['어드민'],
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
				element: <>{page.element}</>,
			})),
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
