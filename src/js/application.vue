<template>
    <div id="main" class="row">
        <div class="col s1"></div>
        <exchangeableFields class="col s10" v-on:search="search"></exchangeableFields>
        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
        <div class="col s1"></div>
    </div>
</template>

<script lang="ts">
    import * as Vue from 'vue'
    import exchangeableFields from "./exchangeable-fields"
    import Component from 'vue-class-component'

    @Component({
        components: { exchangeableFields }
    })
    export default class Application extends Vue {
        search(){
            console.log("単語を検索します")
        }
    }
</script>

<style>
    #main {
        margin-top: 30px;
    }
</style>