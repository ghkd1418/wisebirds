import { useGetUserInfo } from '@/services/user/getUserInfo';
import { ShieldUser } from 'lucide-react';

import Popover from '@/components/common/PopOver/PopOver';

const Profile = () => {
	const { data: user } = useGetUserInfo();

	return (
		<Popover
			content={
				<span>
					{user?.name}
					<br />
					{user?.company.name}
				</span>
			}
		>
			<ShieldUser />
			{user?.email}
		</Popover>
	);
};

export default Profile;
