import Vue from 'vue'
import App from './App'

Vue.directive('error', {
  bind: function () {
    console.log('bound')
  },
  update: function (value) {
    if (!value.length) {
      this.el.classList.add('error')
    } else {
      this.el.classList.remove('error')
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
