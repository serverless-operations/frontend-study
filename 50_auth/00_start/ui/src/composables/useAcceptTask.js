import { ref } from 'vue';
import axios from '../api/axios';

export function useAcceptTask() {
  const isLoading = ref(false);

  async function acceptTask(id) {
    isLoading.value = true;
    await axios.put(`/tasks/${id}`);
    isLoading.value = false;
  }

  return [isLoading, acceptTask];
}
