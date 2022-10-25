<template>
    <div>
    <h1>The User Page</h1>
    <hr>
    <!-- <p>Loaded ID: {{ id }} </p> -->
    <button @click="navigateToHome" class="btn btn-primary">Go Home</button>
    <hr>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id
    //         // params holds key value pairs of parameters
    //     }
    // },
    // // Check https://github.com/vuejs/vue-router/tree/dev/examples/route-props to replace watch feature
    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id;
    //     }
    // },
    methods: {
        navigateToHome() {
            // this.$router.push({path: '/'});
            // this.$router.push('/');
            this.$router.push({ name: 'home' });
        }
    }
}
</script>