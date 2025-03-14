import { useState } from 'react';

import type { BackOfficeUserRole } from '@/types/user';
import { BACK_OFFICE_ROLES } from '@/types/user';

import Select from '@/components/common/Select/Select';

const RoleSelect = () => {
	const [selectedRole, setSelectedRole] = useState<BackOfficeUserRole>(
		BACK_OFFICE_ROLES[0],
	);

	return (
		<Select onChange={(role) => setSelectedRole(role as BackOfficeUserRole)}>
			<Select.Trigger>{selectedRole}</Select.Trigger>
			<Select.OptionList>
				{BACK_OFFICE_ROLES.map((role) => (
					<Select.Option key={role} value={role}>
						{role}
					</Select.Option>
				))}
			</Select.OptionList>
		</Select>
	);
};

export default RoleSelect;
