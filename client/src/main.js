import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router'
import store from './store'
import axios from 'axios'
import 'sweetalert2/dist/sweetalert2.min.css';

axios.defaults.baseURL = 'http://localhost:3000';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
