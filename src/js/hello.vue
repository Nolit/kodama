<template>
  <div>
  <mdl-textfield label="Name" v-model="message"></mdl-textfield>
    <p>message: {{message}}</p>
    
    <mdl-button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored" @click="greet">Greet</mdl-button>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        props: {
            message: String
        }
    })
    export default class MyComponent extends Vue {
        message: String

        greet () {
            alert('greeting: ' + this.message + 1)
        }
    }
</script>