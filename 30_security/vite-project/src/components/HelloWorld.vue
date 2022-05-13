<script setup>
defineProps({
  msg: String
})

</script>

<template>
  <div v-html="msg"></div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
