import Vue from 'vue'
import App from './App.vue'
import toast from "@/components/common/toast";

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

Vue.use(toast)

import router from './router/index'
import store from "@/store/store";

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
