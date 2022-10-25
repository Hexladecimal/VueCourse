<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> User Name: {{ switchName() }}</p>
        <p> User Age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name</button>

    </div>
</template>

<script>
import { eventBus } from '../main';
    export default {
        // props is an array, using things from outside, the string in the array must match the string being called.
        // camel case is a perfectly fine way to use the props. Split can't be used on a number.
        // You can add validation to the props
       // props: ['myName'],
       props: {
       //    myName: String // this validates that type is a string, you can also say it is multiple types, like [String, Array]
       myName: {
           type: String,
           //required: true // this clearifies that the component won't run until the required string is present
           // You can also set a default string
          // default: 'Meow'
       // If it was type object/array it would look like this
    //    type: Object,
    //    default: function() {
    //        return {
    //            name: "Ember"
    //        }
    //    }
       },
        resetFn: Function,
        userAge: Number
       },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Amber';
                // custom events to change the value on the dom and not just this element
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
