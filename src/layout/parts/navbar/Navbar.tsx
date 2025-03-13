import { Link } from 'react-router';

import { routes } from '@/routes';
import type { BackOfficeUser } from '@/types/user';

import LOGO from '@/assets/wisebirds_logo.png';

import * as styles from './Navbar.css';

const Navbar = () => {
	const currentUser: BackOfficeUser = {
		id: 1,
		email: 'abc@abc.com',
		name: '홍길동',
		company: {
			id: 1,
			name: '와이즈버즈',
		},
		role: 'manager',
	};

	return (
		<nav className={styles.navStyle}>
			<ul className={styles.ulStyle}>
				<li>
					<img width={100} src={LOGO} alt="와이즈버즈로고" />
				</li>
				<div className={styles.dividerStyle} />
				{routes
					.filter(
						(route) =>
							currentUser && route.allowedRoles.includes(currentUser.role),
					)
					.map((route) => (
						<li key={route.path}>
							<Link to={route.path} className={styles.boldStyle}>
								{route.label}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	);
};

export default Navbar;
