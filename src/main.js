import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle' // Agrega el .min aquí

createApp(App).use(store).use(router).mount('#app')

//import 'bootstrap/dist/css/bootstrap'
