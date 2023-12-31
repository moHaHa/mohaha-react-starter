import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface DevLayoutContainer {}
const DevLayoutContainer: FC<DevLayoutContainer> = ({}) => {
	return (
		<>
			<div className='flex-1 psm bg-white'>
				<Outlet></Outlet>
			</div>
		</>
	);
};
export default DevLayoutContainer;
