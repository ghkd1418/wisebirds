import type { RoleType } from '@/types/user';
import { create } from 'zustand';

interface RoleStore {
	role: RoleType;
	setRole: (role: RoleType) => void;
}

export const useRoleStore = create<RoleStore>((set) => ({
	role: 'admin',
	setRole: (role) => set({ role }),
}));
