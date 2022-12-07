<script setup>
import { provide, inject } from 'vue';
import { LOGGED_IN_USER_KEY } from './provideKeys'
import { user } from './main'

provide(LOGGED_IN_USER_KEY, user);
const u = inject(LOGGED_IN_USER_KEY);
</script>

<template>
  <router-view></router-view>
</template>

<style>

</style>
