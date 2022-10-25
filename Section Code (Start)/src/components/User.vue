<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click ="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :myName="name" 
                @nameWasReset="name = $event"
                :resetFn="resetName"
                :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
// this and the above is how to make data returns dynamic between vue instances. You must use the same property to identify and match
// these to each
    export default {
        data: function() {
            return {
                name: "Amber",
                age: 27
            };
        },
        methods: {
            changeName() {
                this.name = "Ber";
            },
            resetName() {
                this.name = 'Amber';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
