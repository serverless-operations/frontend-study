import { ref } from 'vue';
import axios from '../api/axios';

export function useTasks() {
  const isLoading = ref(true);
  const tasks = ref([]);

  const fetchTasks = async () => {
    isLoading.value = true;
    const { data } = await axios.get('/tasks');
    tasks.value = data;
    isLoading.value = false;
  };

  fetchTasks();

  return {
    isLoading,
    tasks,
    refetch: fetchTasks,
  };
}
