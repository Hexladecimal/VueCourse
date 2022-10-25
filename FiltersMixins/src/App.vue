<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase}}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add New Item</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>       
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
// Filter changes how the user sees information.
// Don't run filters with arrays, Consider using a computed prop as it will save on server load
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: 'Hello there!'
            }
        }, // toUpperCase is a js function
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
