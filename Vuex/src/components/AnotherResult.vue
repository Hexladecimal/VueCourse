<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
  // props: ['counter']
  // computed: {
  //     counter() {
  //         return this.$store.getters.doubleCounter;
  //     },
  //     clicks() {
  //         return this.$store.getters.stringCounter;
  //     }
  // }
  computed: {
    // 3 dots tells js to pull all the objects out of the methods and create sep key value pairs for each
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.CLICK_COUNTER
      // must npm install --save-dev babel-preset-stage-2 and put "stage-2" in babel in order for triple dots to work
    })
  }
};
</script>