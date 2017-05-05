import * as Vue from 'vue'
import * as VueMdl from 'vue-mdl'
import Hello from './hello.vue'

Vue.use(VueMdl)

new Vue({
  el: '#app',
  render: h => h(Hello, {
    props: { message: 'Hello World' }
  })
})