<script setup>
import { ref } from 'vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import DangerousHtml from './dangerousHtml.json';
// import { sanitizeUrl } from '@braintree/sanitize-url'


const msg = ref('Hello Vue 3 + Vite')
const anchorNg = ref('javascript:alert("危険なaタグ！")')
// const anchorOk = ref(sanitizeUrl(anchorNg.value))

function vHtmlOk() {
  msg.value = "<h1>安全なHTML</h1>"
}

function vHtmlNg() {
  msg.value = DangerousHtml.html
}

</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <div>
    <h2>v-html</h2>
    <div class="v-html-button-area">
      <button @click="vHtmlOk">大丈夫なv-html</button>
      <button @click="vHtmlNg">脆弱なv-html</button>
    </div>
  </div>
  <HelloWorld :msg="msg" />
  <div>
    <h2>aタグ</h2>
    <div class="a-area">
      <a :href="anchorNg">脆弱なaタグ</a>
      <!-- <a :href="anchorOk">大丈夫なaタグ</a> -->
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-html-button-area {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.a-area {
  margin-bottom: 1rem;
}
</style>
