import * as Vue from 'vue'
import VueMdl from 'vue-mdl'
import Hello from './hello'

Vue.use(VueMdl);

new Vue({
  el: '#app',
  render: h => h(Hello, {
    props: { message: 'Hello World' }
  })
});