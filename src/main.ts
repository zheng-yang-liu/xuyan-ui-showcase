import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import xy from "yanyan-ui"
import"yanyan-ui/assets/iconFont/iconfont.css"
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(xy);
app.use(ElementPlus)

app.use(router)
app.use(createPinia());

app.mount('#app')
