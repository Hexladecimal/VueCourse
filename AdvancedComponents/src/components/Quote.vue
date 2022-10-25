<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
            </div>
            <hr>
            <div>
           <slot></slot> 
            </div>
        </div>
</template>

<script>
// Slots allow you to pass data from outside the child component <slot></slot>
    export default {
    }
// Styling is done in child component, everything else in parent
// Unnamed slots are called default and inherit the div styling from the child
// Example use case of slot is a slideshow
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

     h2 {
         color: red;
     }
     
     .title {
         font-style: italic;
     }
</style>