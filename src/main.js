import { createApp } from 'vue';
import App from './App.vue';
import Utils from './plugins/utils';

import './assets/main.css';

createApp(App).use(Utils).mount('#app');
