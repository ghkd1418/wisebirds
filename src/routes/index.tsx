import { createBrowserRouter } from 'react-router';

import { GlobalLayout } from '@/layout';
import { Home, NotFound, RouterErrorBoundary } from '@/pages';

export const routers = createBrowserRouter([
	{
		path: '/',
		errorElement: <RouterErrorBoundary />,
		element: <GlobalLayout />,

		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
