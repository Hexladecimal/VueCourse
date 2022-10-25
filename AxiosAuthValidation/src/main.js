import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.use(Vuelidate)
// allows you to set default settings for axios
axios.defaults.baseURL = 'https://axios-intro.firebaseio.com'
//axios.defaults.headers.common['Authorization'] = 'test token'
axios.defaults.headers.get['Accepts'] = 'application/json'

const regInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  config.headers['SOMETHING']
  return config
})
const resInterceptor = axios.interceptors.response.use( 'Response Interceptor', res => {
  console.log(res)
  return res
})

// Stops logging before it ever gets posted
axios.interceptors.request.eject(regInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
