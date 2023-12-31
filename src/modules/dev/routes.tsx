import { RouteObject } from 'react-router-dom';
import DevLayout from '~/layouts/DevLayout/DevLayout';

export const devRoutes: RouteObject = {
	path: '/dev',
	element: <DevLayout />,
	children: [
		{
			path: '',
			element: <div> dev first page</div>,
		},
	],
};
