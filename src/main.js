import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'normalize.css'

import './assets/font/iconfont.css'

import './assets/main.css'

import SocketService from './utils/socket_service'
SocketService.Instance.connect()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
