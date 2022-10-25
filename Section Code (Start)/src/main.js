import Vue from 'vue'
import App from './App.vue'

// You can use this new instance to store, transport and change data to be used over the entire application
export const eventBus = new Vue({
  methods: {
    changeAge() {
      this.$emit('ageWasEdited', age)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

