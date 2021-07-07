import Vue from 'vue'
import App from './App.vue'

import toast from '../lib/vueToast.umd'

Vue.config.productionTip = false

Vue.use(toast)

window.hv = new Vue({
  render: h => h(App)
}).$mount('#app')
