import { Outlet } from 'react-router';

import * as styles from './GlobalLayout.css';
import { Navbar } from './parts';

interface GlobalLayoutProps {
	hideNavbar?: boolean;
}

const GlobalLayout = ({ hideNavbar = false }: GlobalLayoutProps) => {
	return (
		<div className={styles.container}>
			{!hideNavbar && <Navbar />}
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
};

export default GlobalLayout;
