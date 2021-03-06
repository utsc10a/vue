import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'

require("./assets/main.css");
require("./assets/main.scss");

axios.defaults.baseURL = 'https://utsc10a.pythonanywhere.com/'

createApp(App).use(store).use(router, axios).mount('#app')
