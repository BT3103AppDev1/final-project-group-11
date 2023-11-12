import './assets/main.css'
import {generateAndAddProducts} from './productGenerator.js'
import {updatePreviousPrices, addDocName} from './previousPriceFunction.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// generateAndAddProducts()
// updatePreviousPrices()
// addDocName()
createApp(App).use(router).mount('#app')