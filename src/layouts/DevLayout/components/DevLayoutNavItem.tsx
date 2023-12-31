import { FC } from 'react';
import { Link } from 'react-router-dom';
interface DevLayoutItem {
	to: string;
	text: string;
}
const DevLayoutItem: FC<DevLayoutItem> = ({ text, to }) => {
	return (
		<>
			<div className='bg-white rounded-lg p-sm mb-xs'>
				<Link to={to}>{text}</Link>
			</div>
		</>
	);
};
export default DevLayoutItem;
