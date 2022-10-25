import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes }from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes, // Shortcut where key and value is the same
  mode: 'history', // look up vue router in google to understand why you use history instead of the default '#'
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    // return {x: 0, y: 700}; 
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next(); // Pass nothing, false, or a path or redirect
});

new Vue({
  el: '#app',
  router, // router-view in the app.vue is a js function
  render: h => h(App)
})
