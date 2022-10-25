import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'


Vue.use(VueResource); 

Vue.http.options.root = 'https://httptesting-71102.firebaseio.com/';
Vue.http.interceptors.push((request, next) => { // Next allows the request to travel on
  console.log(request);
  // Post creates new data and put overwrites data
  if (request.method == 'POST') {
    request.method = 'PUT'; // Converts post requests to put
  }
    next(response => {
      // this affects all requests
      response.json = () => { return {messages: response.body} }
    });
  });

new Vue({
  el: '#app',
  render: h => h(App)
})
