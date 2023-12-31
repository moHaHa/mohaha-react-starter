import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface DevLayout {}
const DevLayout: FC<DevLayout> = ({}) => {
	return (
		<>
			<Outlet></Outlet>
		</>
	);
};
export default DevLayout;
