import { Typography } from '@/components/common/Typography/Typography';
import UserTable from '@/components/views/User/UserTable';

import * as styles from './User.css';

const User = () => {
	return (
		<div className={styles.container}>
			<Typography variant="h4" className={styles.title}>
				사용자 관리
			</Typography>
			<UserTable />
		</div>
	);
};

export default User;
