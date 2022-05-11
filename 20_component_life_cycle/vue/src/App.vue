<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Tab1 from './components/Tab1.vue';
import Tab2 from './components/Tab2.vue';

const tabName = ref('Tab1')
const tabs = {
  Tab1,
  Tab2
}

const show = ref(true);
const toggleShow = () => {
  show.value = !show.value
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <span @click='tabName = "Tab1"'>Tab 1 </span>
    <span @click='tabName = "Tab2"'>Tab 2</span>
    <keep-alive>
      <component :is="tabs[tabName]" class="tab-area" />
    </keep-alive>
  </div>

  <div style="margin-top: 2rem;">
    <button @click="toggleShow">Toggle HelloWorld Component</button>
  </div>

  <HelloWorld v-if="show" msg="Hello Vue 3 + Vite" />
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
</style>
