<template>
  <div>
    Login
  </div>
  <div>
    <ul>
      <li>member: yamadataro</li>
      <li>manager: tanakajiro</li>
    </ul>
    <form @submit="onSubmit">
      <div><label for="username">ユーザー名</label><input id="username" type="text" v-model="username"></div>
      <div><label for="password">パスワード</label><input id="password" type="password" v-model="password"></div>
      <button :disabled="isSubmitting" type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSubmitLogin } from '../composables/useSubmitLogin'
import { useRouter } from 'vue-router'

const username = ref()
const password = ref()
const [isSubmitting, submitLogin] = useSubmitLogin();
const router = useRouter();

async function onSubmit(e) {
  e.preventDefault();
  await submitLogin(username.value, password.value)
  router.push('/')
}

</script>

<style lang="scss" scoped>

</style>