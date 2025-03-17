import { useState } from 'react';

import { useCreateUser } from '@/services/user/createUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const USER_CREATE_CONFIG = {
	EMAIL_MIN: 9,
	EMAIL_MAX: 50,
	PASSWORD_MIN: 8,
	PASSWORD_MAX: 15,
	NAME_MAX: 16,
	ERROR_MESSAGES: {
		EMAIL: {
			REQUIRED: '아이디(이메일)을 입력하세요.',
			INVALID: '올바른 이메일 주소를 입력하세요.',
			DUPLICATE: '이미 사용중인 이메일입니다. 다른 이메일을 입력하세요.',
		},
		PASSWORD: {
			REQUIRED: '비밀번호를 입력하세요.',
			INVALID: '8~15자 영문, 숫자, 특수문자를 사용하세요.',
		},
		CONFIRM_PASSWORD: {
			REQUIRED: '비밀번호를 입력하세요.',
			MISMATCH: '비밀번호가 일치하지 않습니다.',
		},
		NAME: {
			REQUIRED: '이름을 입력하세요.',
			INVALID: '이름을 올바르게 입력하세요.',
		},
	},
} as const;

const schema = z
	.object({
		email: z
			.string()
			.min(
				USER_CREATE_CONFIG.EMAIL_MIN,
				USER_CREATE_CONFIG.ERROR_MESSAGES.EMAIL.INVALID,
			)
			.max(
				USER_CREATE_CONFIG.EMAIL_MAX,
				USER_CREATE_CONFIG.ERROR_MESSAGES.EMAIL.INVALID,
			)
			.email(USER_CREATE_CONFIG.ERROR_MESSAGES.EMAIL.INVALID),
		password: z
			.string()
			.min(
				USER_CREATE_CONFIG.PASSWORD_MIN,
				USER_CREATE_CONFIG.ERROR_MESSAGES.PASSWORD.INVALID,
			)
			.max(
				USER_CREATE_CONFIG.PASSWORD_MAX,
				USER_CREATE_CONFIG.ERROR_MESSAGES.PASSWORD.INVALID,
			)
			.regex(/[A-Za-z]/, USER_CREATE_CONFIG.ERROR_MESSAGES.PASSWORD.INVALID)
			.regex(/[0-9]/, USER_CREATE_CONFIG.ERROR_MESSAGES.PASSWORD.INVALID)
			.regex(
				/[^A-Za-z0-9]/,
				USER_CREATE_CONFIG.ERROR_MESSAGES.PASSWORD.INVALID,
			),
		confirmPassword: z.string(),
		name: z
			.string()
			.min(1, USER_CREATE_CONFIG.ERROR_MESSAGES.NAME.REQUIRED)
			.max(
				USER_CREATE_CONFIG.NAME_MAX,
				USER_CREATE_CONFIG.ERROR_MESSAGES.NAME.INVALID,
			)
			.regex(
				/^[가-힣a-zA-Z]+$/,
				USER_CREATE_CONFIG.ERROR_MESSAGES.NAME.INVALID,
			),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: USER_CREATE_CONFIG.ERROR_MESSAGES.CONFIRM_PASSWORD.MISMATCH,
		path: ['confirmPassword'],
	});

type FormValues = z.infer<typeof schema>;

interface UserCreateFormProps {
	onSuccess?: () => void;
}

const UserCreateForm = ({ onSuccess }: UserCreateFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const [isPasswordVisible, setPasswordVisible] = useState(false);

	const { mutate } = useCreateUser();

	const onSubmit = (data: FormValues) => {
		const formData = new FormData();
		formData.append('email', data.email);
		formData.append('name', data.name);
		formData.append('password', data.password);
		formData.append('confirmPassword', data.confirmPassword);

		mutate(
			{ formData },
			{
				onSuccess: () => {
					console.log('폼 제출 성공', data);
					onSuccess?.();
				},
				onError: (error) => {
					console.error('폼 제출 실패:', error, 'data', data);
				},
			},
		);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={''}>
			<div>
				<label>아이디 (이메일)</label>
				<input type="email" {...register('email')} placeholder="이메일 입력" />
				{errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
			</div>

			<div>
				<label>비밀번호</label>
				<input
					type={isPasswordVisible ? 'text' : 'password'}
					{...register('password')}
					placeholder="영문, 숫자, 특수문자 조합 8~15자"
				/>
				<button
					type="button"
					onClick={() => setPasswordVisible((prev) => !prev)}
				>
					{isPasswordVisible ? '숨기기' : '보이기'}
				</button>
				{errors.password && (
					<p style={{ color: 'red' }}>{errors.password.message}</p>
				)}
			</div>

			<div>
				<label>비밀번호 확인</label>
				<input
					type="password"
					{...register('confirmPassword')}
					placeholder="비밀번호 재입력"
				/>
				{errors.confirmPassword && (
					<p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
				)}
			</div>

			<div>
				<label>이름</label>
				<input type="text" {...register('name')} placeholder="이름 입력" />
				{errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
			</div>

			<button type="submit">회원가입</button>
		</form>
	);
};

export default UserCreateForm;
