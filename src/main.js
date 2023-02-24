import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// Font Awesome CSS


//Bootstrap CSS, JS

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";



const app = createApp(App)

app.use(router)

app.mount('#app')
