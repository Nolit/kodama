<template>
  <div>
    <input class="col s5" v-model="source" v-on:keyup="searchOrNothing" />
    <button class="col s1 btn small waves-effect waves-light" type="submit" name="action">
      <i class="material-icons">repeat</i>
    </button>
    <input disabled v-model="result" type="text" class="col s5 black-text" />
  </div>
</template>

<script lang="ts">
  import * as Vue from 'vue'
  import Component from 'vue-class-component'

    @Component({
      props: {
        result: String
      }
    })
    export default class ExchangeableFields extends Vue {
      source: String = "";
      result: String = "";
      searchTimer: number;

      searchOrNothing () {
        console.log("input now: " + this.source);
        clearTimeout(this.searchTimer);
        this.searchTimer = setTimeout(function(me){
            me.fire('search');
        }, 1000, this);
      }

      fire(eventName: string){
        super.$emit(eventName, this.source);
      }
    }
</script>