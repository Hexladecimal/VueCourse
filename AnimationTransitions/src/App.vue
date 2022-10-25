<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <br />
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br />
        <br />
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-show="show">This is info</div>
        </transition>
        <transition name="slide" type="animation" appear>
          <div class="alert alert-info" v-if="show">This is info</div>
        </transition>
        <transition
          enter-active-class="animated bounce"
          leave-class
          leave-active-class="animated shake"
        >
          <div class="alert alert-info" v-if="show">This is info</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is info</div>
          <div class="alert alert-warning" v-else="!show" key="warning">This is warning</div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
        </transition>
        <hr />
        <button
          class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
        >Toogle</button>
        <br />
        <br />
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br><br>
         <ul class="list-group">
             <transition-group name="slide">
          <li 
            class="list-group-item" 
            v-for="(number, index) in numbers" 
            @click="removeItem(Index)"
            style="cursor: pointer"
            :key="number">{{ number }}</li>
             </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";

export default {
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: "fade",
      elementWidth: 100,
      selectedComponent: "app-success-alert",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter"); //Animate at Enter and before function
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
      done(); // Tells js to execute when there isn't any css to determine an end point
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
    addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1); // This will add to the start of an array
        // splice can add or remove from a string
    },
    removeItem(index) {
        this.numbers.splice(index, 1); // Removes 1 item based on the number it is in the index
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  /* transform: translateY(20px); */
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
  /*default = 1*/
}

.slide-leave-active {
  /*If you set the type above to animation it will finish the animation first, if you do transition, it will do transition*/
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute; 
}

.slide-move {
    transition: transform 1s; /*whenever transform is used this will animate it over one second*/
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
