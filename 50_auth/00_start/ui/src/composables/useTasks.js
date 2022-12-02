import { ref } from 'vue';
import axios from '../api/axios';

export function useTasks() {
  const isLoading = ref(true);
  const tasks = ref([]);
  axios.get('/tasks').then((v) => {
    tasks.value = v.data;
    isLoading.value = false;
  });

  return {
    isLoading,
    tasks,
  };
}
