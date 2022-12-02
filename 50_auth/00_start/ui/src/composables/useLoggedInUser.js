import { inject } from 'vue';
import { LOGGED_IN_USER_KEY } from '../provideKeys';

export function useLoggedInUser() {
  const user = inject(LOGGED_IN_USER_KEY);
  return user;
}
