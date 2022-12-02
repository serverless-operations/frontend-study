import { ref } from 'vue';
import axios from '../api/axios';
import { useLoggedInUser } from './useLoggedInUser';

export function useSubmitLogin() {
  const isLoading = ref(false);
  const loggedInUser = useLoggedInUser();

  async function submitLogin(username, password) {
    isLoading.value = true;
    const { data } = await axios.post('/login', { username, password });
    isLoading.value = false;
    loggedInUser.value = data;
  }

  return [isLoading, submitLogin];
}
