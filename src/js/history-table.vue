<template>
    <table class="bordered z-depth-2 deep-purple lighten-5">
        <tbody>
            <tr v-for="historyData in history">
                <td>{{ historyData.source }}</td>
                <td>{{ historyData.result }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import * as Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        props: {
            history: Array
        }
    })
    export default class HistoryTable extends Vue {
        history: Array<Object>
    }
</script>