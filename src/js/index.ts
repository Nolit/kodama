import Vue from 'vue'
import Hello from './hello.vue'
import VueMdl from 'vue-mdl'
Vue.use(VueMdl)

// mount
new Vue({
  el: '#app',
  render: h => h(Hello, {
    props: { message: 'Hello World' }
  })
})