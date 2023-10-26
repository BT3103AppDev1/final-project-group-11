import './assets/main.css'
// import {generateAndAddProducts} from './productGenerator.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

createApp(App).use(router).mount('#app')