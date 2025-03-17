import Modal from '@/components/common/Modal/Modal';

import UserCreateForm from '../../../features/user/UserCreateForm';

const UserCreate = () => {
	return (
		<Modal>
			<Modal.Trigger>생성</Modal.Trigger>
			<Modal.Content>
				<UserCreateForm />
				<Modal.Footer>
					<Modal.CloseButton>취소</Modal.CloseButton>
				</Modal.Footer>
			</Modal.Content>
		</Modal>
	);
};

export default UserCreate;
