import { createApp } from 'vue'
import { createPinia } from 'pinia'
import xy from "yanyan-ui"


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(xy);

app.use(createPinia())
app.use(router)

app.mount('#app')
