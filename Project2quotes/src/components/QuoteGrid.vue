<template>
    <div class="row">
        <app-Quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-Quote>
    </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
    props: ['quotes'],
    components: {
        appQuote: Quote
    },
    methods: {
        deleteQuote(index){
            this.$emit('quoteDeleted', index);
        }
    }
}
</script>

<style>

</style>