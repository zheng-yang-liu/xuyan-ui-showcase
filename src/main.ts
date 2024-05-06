import { createApp } from 'vue'
import { createPinia } from 'pinia'
import xy from "yanyan-ui"
import 'yanyan-ui/lib/style.css'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(xy);
app.mount('#app')
