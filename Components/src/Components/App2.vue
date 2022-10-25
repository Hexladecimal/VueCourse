<template>
   <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
</template>

<script>

</script>

<style scoped>
/* By default any stye we set applys globally. Adding scoped will modulate it to only be around the divs we want */
/* Emulates a shadow dom, each element has it's own doms when used like this. */
    div {
        border: 1px solid red
    }
</style>