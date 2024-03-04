import { createApp } from 'vue'
import App from './App.vue'
import Contadores from './MyContadores.vue'
import ConsoleLog from './ConsoleLog.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import * as bootstrap from "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

// createApp(App).mount('#app')

window.bootstrap = bootstrap
const app = createApp(App)
app.component('app-contadores', Contadores)
app.component('ConsoleLog', ConsoleLog)
app.mount("#app");