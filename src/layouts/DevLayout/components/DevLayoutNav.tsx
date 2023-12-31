import { FC, ReactNode } from 'react';
interface DevLayoutNav {
	children: ReactNode;
}
const DevLayoutNav: FC<DevLayoutNav> = ({ children }) => {
	return <div className='w-250px min-h-screen psm bg-[#eeeeee] '>{children}</div>;
};
export default DevLayoutNav;
