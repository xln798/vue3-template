import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import './common.css';
import './transition.css';
import 'element-plus/dist/index.css';

document.querySelector('html').style.fontSize = `${(document.documentElement.clientWidth / 1920) * 100}px`;
createApp(App).use(router).use(ElementPlus).mount('#app');
