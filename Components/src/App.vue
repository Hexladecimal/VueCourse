<template>
<div class="container">
   <header-app1></header-app1>
        <hr>
    <output-app2></output-app2>
        <hr>
 <footer-app3></footer-app3>
 </div>
</template>

<script>
import App1 from './components/App1.vue'
import App2 from './components/App2.vue'
import App3 from './components/App3.vue'

export default {
    components: {
        'header-app1': App1,
        'output-app2': App2,
        'footer-app3': App3
    }
}
</script>

<style>

</style>
