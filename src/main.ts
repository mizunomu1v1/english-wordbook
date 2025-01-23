import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// eslint-disable-next-line
// @ts-ignore
import CogIcon from 'vue-material-design-icons/Cog.vue'

const app = createApp(App)

// グローバル登録
app.component('CogIcon', CogIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
