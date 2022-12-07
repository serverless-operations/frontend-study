import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';

export const user = ref(null);

const app = createApp(App);

app.use(router).mount('#app');
