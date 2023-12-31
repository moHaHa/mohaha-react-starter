import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import DevLayoutContainer from './components/DevLayoutContainer';
import DevLayoutNav from './components/DevLayoutNav';
import DevLayoutItem from './components/DevLayoutNavItem';
interface DevLayout {}
const DevLayout: FC<DevLayout> = ({}) => {
	const devLinks = [
		{
			path: '/dev/components',
			text: 'Components',
		},
		{
			path: '/dev/icons',
			text: 'Icons',
		},
		{
			path: '/dev/themes',
			text: 'Themes',
		},
	];

	return (
		<>
			<div className={uno}>
				<DevLayoutNav>
					{devLinks.map(({ path, text }) => (
						<DevLayoutItem to={path} text={text} />
					))}
				</DevLayoutNav>

				<DevLayoutContainer>
					<Outlet></Outlet>
				</DevLayoutContainer>
			</div>
		</>
	);
};
export default DevLayout;
const uno = 'bg-[#eaeaea] flex h-full';
