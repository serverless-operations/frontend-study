import { ref } from 'vue';
import axios from '../api/axios';

export function useAcceptTask() {
  const isLoading = ref(false);

  async function acceptTask(task) {
    isLoading.value = true;
    await axios.put(`/tasks/${task.id}`, task);
    isLoading.value = false;
  }

  return [isLoading, acceptTask];
}
