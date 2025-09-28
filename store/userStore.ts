import { defineStore } from 'pinia';

type UserRole = 'student' | 'teacher' | 'institution' | null;

interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  role: UserRole;
  token: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    id: null,
    name: null,
    email: null,
    role: null,
    token: null
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token)
  },
  actions: {
    setUser(user: Partial<UserState>) {
      Object.assign(this, user);
    },
    logout() {
      this.$reset();
    }
  }
});
