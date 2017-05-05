<template>
  <div>
  <mdl-textfield label="Name" v-model="message"></mdl-textfield>
    <p>message: {{message}}</p>
    
    <mdl-button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored" @click="greet">Greet</mdl-button>
    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
      <i class="material-icons right">send</i>
    </button>
    <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
  </div>
</template>

<script lang="ts">
  import * as Vue from 'vue'
  import Component from 'vue-class-component'

    @Component({
        props: {
            message: String
        }
    })
    export default class MyComponent extends Vue {
        message: String;

        greet () {
            alert('greeting: ' + this.message + 1)
        }
    }
</script>