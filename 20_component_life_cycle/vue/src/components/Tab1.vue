<template>
  <div>
    <h2>Tab 1</h2>
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

onActivated(() => console.log('onActivated Tab 1'))
onDeactivated(() => console.log('onDeactivated Tab 1'))

onMounted(() => console.log('onMounted Tab 1'));
onUpdated(() => console.log('onUpdated Tab 1'));
onUnmounted(() => console.log('onUnmounted Tab 1'));
onBeforeMount(() => console.log('onBeforeMount Tab 1'));
onBeforeUpdate(() => console.log('onBeforeUpdate Tab 1'));
onBeforeUnmount(() => console.log('onBeforeUnmount Tab 1'));
</script>
 