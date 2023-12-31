import { RouteObject } from 'react-router-dom';
import DevLayout from '~/layouts/DevLayout/DevLayout';
import ColorsThemes from './ui/ColorsThemes/ColorsThemes';
import ProjectComponents from './ui/ProjectComponents/ProjectComponents';

export const devRoutes: RouteObject = {
	path: '/dev',
	element: <DevLayout />,
	children: [
		{
			path: 'components',
			element: <ProjectComponents></ProjectComponents>,
		},
		{
			path: 'themes',
			element: <ColorsThemes></ColorsThemes>,
		},
	],
};
