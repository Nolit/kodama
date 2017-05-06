import * as Vue from 'vue'
import VueMdl from 'vue-mdl'
import Application from './application'

Vue.use(VueMdl);

new Vue({
  el: '#app',
  render: h => h(Application)
});