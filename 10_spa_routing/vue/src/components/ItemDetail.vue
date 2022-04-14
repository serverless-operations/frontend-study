savedItems<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getItemById, savedItems } from '../api/items';

const route = useRoute()
const item = ref();

// Bad
// const foundItem = savedItems.find(item => item.id === route.params.id);
// item.value = foundItem;

// Good
const loadItem = async (newId) => {
  item.value = await getItemById(newId);
}
loadItem(route.params.id)
</script>

<template>
  <div>
    <h1>詳細</h1>
    <ul>
      <li>
        name: {{ item?.name }}
      </li>
      <li>
        description: {{ item?.description }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
