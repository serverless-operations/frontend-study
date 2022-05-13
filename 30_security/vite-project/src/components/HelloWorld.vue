<script setup>
// import * as sanitizeHtml from 'sanitize-html';

defineProps({
  msg: String
})

</script>

<template>
  <!-- BAD -->
  <div v-html="msg"></div>

  <!-- GOOD -->
  <!-- <div v-html="sanitizeHtml(msg)"></div> -->
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
