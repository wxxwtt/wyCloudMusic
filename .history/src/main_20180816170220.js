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
// axios 配置开始
import Axios from 'axios'
Axios.defaults.baseURL = "http://192.168.10.230:3000"
Axios.defaults.timeout =  6000;
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  Mint.Indicator.open('加载中...');
  return config;
}, function (error) {
  console.log(err)
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  Mint.Indicator.close();
  return response;
}, function (error) {
  console.log(err)
  // Do something with response error
  return Promise.reject(error);
});
Vue.prototype.$axios = Axios;
// axios 配置结束
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
