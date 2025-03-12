import { Link } from 'react-router';

import LOGO from '@/assets/wisebirds_logo.png';

import * as styles from './Navbar.css';

const Navbar = () => {
	return (
		<nav className={styles.navStyle}>
			<ul className={styles.ulStyle}>
				<li>
					<Link to="/">
						<img width={100} src={LOGO} alt="와이즈버즈로고" />
					</Link>
				</li>
				<div className={styles.dividerStyle} />
				<li className={styles.boldStyle}>캠페인</li>
			</ul>
		</nav>
	);
};

export default Navbar;
