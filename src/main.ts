import './assets/main.css'
import Vue3PagesComponents from 'vue3-pages-components'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Vue3PagesComponents)
app.use(router)

app.mount('#app')
