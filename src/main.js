import Vue from 'vue'
import App from './App.vue'
import toast from "@/components/common/toast";
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";
Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

Vue.use(toast)
Vue.use(VueLazyload,{
  preload:1.3,  //
  err: '',   //错误时的图片
  loading:'',  // 加载时的图片  loading:require('./assets/...png')
  attempt:1
})
import router from './router/index'
import store from "@/store/store";

FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
