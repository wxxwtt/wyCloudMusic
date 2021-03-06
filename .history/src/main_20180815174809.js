// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
import './lib/mui/css/mui.min.css'
import './lib/font/iconfont.css'
import Axios from 'axios'
Axios.defaults.baseURL = "http://localhost:3000"
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
import vconsole from './assets/vconsole.js'
// Vue.use(vconsole)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
