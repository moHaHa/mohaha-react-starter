import { FC } from 'react';
import { Link } from 'react-router-dom';
import { appLinks } from '~/router/links';
interface Home {}
const Home: FC<Home> = ({}) => {
	return (
		<>
			<div>
				this home page,go to <Link to={appLinks.dev.path}>dev</Link>
			</div>
		</>
	);
};
export default Home;
