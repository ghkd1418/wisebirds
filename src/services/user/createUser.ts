import { useMutation } from '@tanstack/react-query';

import api from '../api';

export interface CreateUserResponse {
	result: boolean;
	id: number;
}

export const createUser = async (formData: FormData) => {
	const response = await api
		.post(`users`, {
			body: formData,
		})
		.json();

	return response;
};

export const useCreateUser = () => {
	return useMutation({
		mutationFn: ({ formData }: { formData: FormData }) => createUser(formData),
	});
};
