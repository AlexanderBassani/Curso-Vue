import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import * as bootstrap from "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

window.bootstrap = bootstrap
const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
// app.component('app-contadores', Contadores)
app.mount("#app");





// import Bootstrap from '@/bootstrap';
// import BootstrapIcons from '@/bootstrap-icons';

// Vue.use(Bootstrap);
// Vue.use(BootstrapIcons);