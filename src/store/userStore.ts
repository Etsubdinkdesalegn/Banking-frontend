import { create } from 'zustand';
import { User } from '@/types/user';
import api from '@/api/axios';

interface UserState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  updateUser: (data: Partial<User>) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    set({ isLoading: true });
    try {
      const { data } = await api.get('/users/me');
      set({ user: data });
    } finally {
      set({ isLoading: false });
    }
  },
  updateUser: async (data) => {
    try {
      const { data: updatedUser } = await api.patch('/users/me', data);
      set({ user: updatedUser });
    } catch (error) {
      console.error('Update failed', error);
      throw error;
    }
  },
}));
