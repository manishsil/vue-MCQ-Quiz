import Vue from 'vue'
import Application from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//npm i bootstrap-vue bootstrap 
// Above cmd was executed to get bootstrap vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(Application),
}).$mount('#appp')
