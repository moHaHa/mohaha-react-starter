import { RouteObject } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import Home from './Home/Home';

export const moduleRoutes: RouteObject = {
	path: '/',
	element: <DefaultLayout />,
	children: [
		{
			path: '',
			element: <Home />,
		},
	],
};
