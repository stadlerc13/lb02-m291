import Vue from 'vue'
//Exercise 01
//??
//??
import App from './App-03.vue'
import store from './store/03_webshop-1'

//kopiert von main.js router
import router from './router'

Vue.config.productionTip = false
//

//Import Bootstrap
import {BootstrapVue} from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
    router, //specify the router configuration for use
    store,
    render: h => h(App)
}).$mount('#app')






