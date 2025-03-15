import { ROLES } from '@/constants/auth';
import { useRoleStore } from '@/store/role';
import type { RoleType } from '@/types/user';

import Select from '@/components/common/Select/Select';

const RoleSelect = () => {
	const { role, setRole } = useRoleStore();

	const handleChange = (role: RoleType) => {
		setRole(role);
	};

	return (
		<Select onChange={(role) => handleChange(role as RoleType)}>
			<Select.Trigger>{ROLES[role]}</Select.Trigger>
			<Select.OptionList>
				{Object.entries(ROLES).map(([key, value]) => (
					<Select.Option key={key} value={key}>
						{value}
					</Select.Option>
				))}
			</Select.OptionList>
		</Select>
	);
};

export default RoleSelect;
