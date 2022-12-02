<template>
  <div v-if="isTaskLoading">
    Loading...
  </div>
  <div v-else>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks">
        <div :style="{ display: 'flex' }">
          <div :style="{ padding: '0 10px' }">{{ task.title }}</div>
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

const user = useLoggedInUser();
const { isLoading: isTaskLoading, tasks: rawTasks } = useTasks();

const tasks = computed(() => {
  return rawTasks.value.map(t => {
    return {
      ...t,
      isAcceptable: t.status === 'created' && user.value.role === 'manager'
    }
  })
})

function onAccept(task) {
  console.log('accept', task)
}

</script>

<style lang="scss" scoped>

</style>