import { Link } from 'react-router';

import { routes } from '@/routes';
import { useRoleStore } from '@/store/role';

import RoleSelect from '@/components/feature/Role/RoleSelect';
import Profile from '@/components/views/Profile/Profile';

import LOGO from '@/assets/wisebirds_logo.png';

import * as styles from './Navbar.css';

const Navbar = () => {
	const { role } = useRoleStore();

	return (
		<nav className={styles.navStyle}>
			<ul className={styles.ulStyle}>
				<li>
					<img width={100} src={LOGO} alt="와이즈버즈로고" />
				</li>
				<div className={styles.dividerStyle} />
				{routes
					.filter((route) => route.allowedRoles.includes(role))
					.map((route) => (
						<li key={route.path}>
							<Link to={route.path} className={styles.boldStyle}>
								{route.label}
							</Link>
						</li>
					))}
			</ul>
			<div className={styles.userStyle}>
				<RoleSelect />
				<Profile />
			</div>
		</nav>
	);
};

export default Navbar;
