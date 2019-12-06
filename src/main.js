import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// rendering the App component inside a div with the id "app"
new Vue({
  render: h => h(App),
}).$mount('#app')
