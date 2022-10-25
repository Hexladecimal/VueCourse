import Vue from 'vue'
import App from './App.vue'
import App1 from './components/App1.vue'
import App2 from './components/App2.vue'
import App3 from './components/App3.vue';

Vue.component('header-app1s', App1);
Vue.component('output-app2s', App2);
Vue.component('footer-app3s', App3);


new Vue({
  el: '#app',
  render: h => h(App)
})
