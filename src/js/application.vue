<template>
    <div id="main" class="row">
        <div class="col s1"></div>
        <exchangeableFields class="col s10" v-on:search="search" v-on:exchange="exchange" :result="result" :source="source" :isEnglishMode="isEnglishMode"></exchangeableFields>
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
        source: string = "";
        result: string = "";
        isEnglishMode: boolean = true;

        search(source: string){
            console.log(`${source}を検索します`);
            this.source = source;
            this.result = source + "123";
        }

        exchange(source: string){
            const tmp = source;
            this.source = this.result;
            this.result = tmp;
            this.isEnglishMode = this.isEnglishMode!;
        }
    }
</script>

<style>
    #main {
        margin-top: 30px;
    }
</style>