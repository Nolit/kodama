import Vue from 'vue'
import Hello from './hello.vue'

// mount
new Vue({
  el: '#app',
  render: h => h(Hello, {
    props: { message: 'Hello World' }
  })
})