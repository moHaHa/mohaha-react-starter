import { RouteObject } from 'react-router-dom';
import DevLayout from '~/layouts/DevLayout/DevLayout';
import ColorsThemes from './ui/ColorsThemes/ColorsThemes';
import ProjectComponents from './ui/ProjectComponents/ProjectComponents';
import ProjectIcons from './ui/ProjectIcons/ProjectIcons';

export const devRoutes: RouteObject = {
	path: '/dev',
	element: <DevLayout />,
	children: [
		{
			path: 'components',
			element: <ProjectComponents></ProjectComponents>,
		},
		{
			path: 'icons',
			element: <ProjectIcons></ProjectIcons>,
		},
		{
			path: 'themes',
			element: <ColorsThemes></ColorsThemes>,
		},
	],
};
