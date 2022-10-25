<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <appQuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></appQuoteGrid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on quote to delete</div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';

    export default {
        data: function(){
            return {
                quotes: [
                    'A sample quote!'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete before adding more')
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
