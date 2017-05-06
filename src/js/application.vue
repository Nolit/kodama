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
            <historyTable class="col s10" :history="history" v-on:delete="deleteHistory"></historyTable>
            <div class="col s1"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import * as Vue from 'vue'
    import Component from 'vue-class-component'
    import exchangeableFields from "./exchangeable-fields"
    import historyTable from "./history-table"
    import axios from "axios"
    const config = require('config');

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
            console.log("isEnglish"+this.isEnglishMode);
            const target = this.isEnglishMode ? 'ja' : 'en';
            const apiKey = config.apiKey;
            axios.get(`https://www.googleapis.com/language/translate/v2?q=${source}&target=${target}&key=${apiKey}`)
                .then(response => {
                    this.result = response.data.data.translations[0].translatedText;
                })
                .catch(error => {
                    console.log(error);
                });
            this.source = source;
        }

        exchange(source: string){
            const tmp = source;
            this.source = this.result;
            this.result = tmp;
            this.isEnglishMode = ! this.isEnglishMode;
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

        deleteHistory(index: number){
            this.history.splice(index, 1);
        }
    }
</script>

<style>
    #main {
        margin-top: 30px;
    }
</style>