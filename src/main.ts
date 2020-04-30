import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLazyLoad from 'vue-lazyload'
import Lightbox from 'vue-easy-lightbox'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueLazyLoad);
Vue.use(Lightbox);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
