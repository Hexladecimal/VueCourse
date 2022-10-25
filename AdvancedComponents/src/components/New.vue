<template>
    <div>
       <h3>New Quote</h3>
       <button @click="counter++">Increase!</button>
       <p>{{ counter }}</p>
        </div>
</template>

<script>
    export default {
        data: function(){
            return {
                counter: 0
            };
        },
        // by default an instance is destoryed when it is loaded like this
        destoryed(){
            console.log('Destoryed!')
        },
        deactivated() {
            // activated whenever we are on the component and load another dynamic component
            console.log('Deactivated!');
        },
        activated(){
            console.log('Activated');
        }
    }
</script>

<style>
</style>