import './styles/main.scss'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axiosInstance from './axiosInstance.js';

const app = createApp(App);

app.use(router);

// Defina o axiosInstance como uma propriedade global do Vue
app.config.globalProperties.axiosInstance = axiosInstance;

app.mount('#app');
