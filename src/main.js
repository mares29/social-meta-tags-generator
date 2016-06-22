import Vue from 'vue'
import App from './App'
import * as hljs from 'highlight.js'

Vue.directive('highlightjs', function () {
  hljs.highlightBlock(this.el)
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
