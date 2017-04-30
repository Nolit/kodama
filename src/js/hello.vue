<template>
  <div>
    <input v-model="message">
    <p>message: {{message}}</p>
    <button @click="greet">Greet</button>
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
            alert('greeting: ' + this.message)
        }
    }
</script>