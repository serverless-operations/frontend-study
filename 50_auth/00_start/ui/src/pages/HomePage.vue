<template>
  <div v-if="(isTaskLoading)">
    Loading...
  </div>
  <div v-else>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks">
        <div :style="{ display: 'flex' }">
          <div :style="{ padding: '0 10px' }">{{ task.title }}({{ task.status }})</div>
          <div v-if="task.isAcceptable">
            <button type="button" @click="() => onAccept(task)">承認</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useLoggedInUser } from '../composables/useLoggedInUser';
import { useTasks } from '../composables/useTasks';
import { useAcceptTask } from '../composables/useAcceptTask';

const user = useLoggedInUser();
const { isLoading: isTaskLoading, tasks: rawTasks, refetch } = useTasks();
const [_, acceptTask] = useAcceptTask();

const tasks = computed(() => {
  return rawTasks.value.map(t => {
    return {
      ...t,
      // タスクがcreatedの状態で、ユーザーがmanagerのロールを持っていたら承認ができる
      isAcceptable: t.status === 'created' && user.value.role === 'manager'
    }
  })
})

async function onAccept(task) {
  // 承認したらacceptedに状態を変えてAPIに投げる
  const updatedTask = { ...task, status: 'accepted' };
  await acceptTask(updatedTask)
  refetch();
}

</script>

<style lang="scss" scoped>

</style>