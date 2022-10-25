import Vue from 'vue'
import App from './App.vue'



Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

// A global mixin will be added to every vue instance and every component
// This is a global mixin
// If you want the data affected you must use the eventBus otherwise it is only affected on each instance

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook')
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
