<template>
    <div id="main">
        <div class="row">
            <div class="col s1"></div>
            <exchangeableFields class="col s10" v-on:search="search" v-on:exchange="exchange" :result="result" :source="source" :isEnglishMode="isEnglishMode"></exchangeableFields>
            <a class="btn-floating btn-large waves-effect waves-light red" @click="add"><i class="material-icons">add</i></a>
            <div class="col s1"></div>
        </div>
        <div class="row">
            <div class="col s1"></div>
            <historyTable class="col s10" :history="history"></historyTable>
            <div class="col s1"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import * as Vue from 'vue'
    import Component from 'vue-class-component'
    import exchangeableFields from "./exchangeable-fields"
    import historyTable from "./history-table"

    @Component({
        components: {
            exchangeableFields,
            historyTable
        }
    })
    export default class Application extends Vue {
        source: string = "";
        result: string = "";
        isEnglishMode: boolean = true;
        history: Array<Object> =[];

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

        add(){
            if( ! this.source || ! this.result){
                return;
            }
            this.history.push({
                source: this.source,
                result: this.result
            });
            this.clear();
        }

        clear(){
            this.source = "";
            this.result = "";
        }
    }
</script>

<style>
    #main {
        margin-top: 30px;
    }
</style>