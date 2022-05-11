<template>
  <div>
    <h2>Tab 2</h2>
    <input type="text" placeholder="this content will persist!" />
  </div>
</template>

<script setup>
import {
  onActivated,
  onDeactivated,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
} from 'vue'

onActivated(() => console.log('onActivated Tab 2'))
onDeactivated(() => console.log('onDeactivated Tab 2'))

onMounted(() => console.log('onMounted Tab 2'));
onUpdated(() => console.log('onUpdated Tab 2'));
onUnmounted(() => console.log('onUnmounted Tab 2'));
onBeforeMount(() => console.log('onBeforeMount Tab 2'));
onBeforeUpdate(() => console.log('onBeforeUpdate Tab 2'));
onBeforeUnmount(() => console.log('onBeforeUnmount Tab 2'));
</script>
 