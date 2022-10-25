<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedColor = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedColor = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="selectedColor = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <!-- <app-blue>
                    <p>Kitten</p>
                </app-blue>
                <app-green>
                    <p>Cat</p>
                    </app-green>
                <app-red>
                    <p>Meow</p>
                    </app-red> -->
                <component :is="selectedColor">
                    <p>Default Content</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
            return {
                selectedColor: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
