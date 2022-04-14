<script setup>
import { ref } from 'vue';
import { getAllItems } from '../api/items';

const items = ref([]);

const loadItems = async () => {
  const result = await getAllItems();
  items.value = result;
};

loadItems();
</script>

<template>
  <div>
    <h1>一覧</h1>
    <ul>
      <li v-for="item in items">
        <router-link :to="`/items/${item.id}`">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
