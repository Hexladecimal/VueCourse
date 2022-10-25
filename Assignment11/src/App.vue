<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <input 
                    type="text"
                    id="text"
                    class="form-control"
                    v-model="text">      
                    <hr>
                    <p>Reversed Text</p>      
                <p>{{ text | reverseText }}</p>
                <hr>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>Length</p>
                <p>{{ text | vLength}}</p>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>Computed Reverse</p>
                <p>{{ reversedText }}</p>
                <hr>
                <p>Computed count</p>
                <p>{{ countText }}</p>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
import { counttextMixin } from './counttextMixin';

    export default {
        mixins: [counttextMixin],
        data() {
            return {
                text: 'Cat',
                isSubmittted: false
            }
        },
        filters: {
            reverseText(value) {
                // this will split an array and output it backwards order
           // return value.split(';').reverse().join(', ');
           return value.split('').reverse().join('');
            }
        },
        methods: {
            submitted(){
                this.isSubmittted = true;
            }
        },
        computed: {
            reversedText(text) {
                return this.text.split('').reverse().join('');
            //     },
            // countText(text) {
            //     return this.text + '(' + this.text.length + ')';
                  }    
            }
        }
</script>

<style>
</style>
