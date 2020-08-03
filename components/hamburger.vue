<template>
  <button
    class="hamburger-btn"
    @click="increment(); toggleClass = !toggleClass"
    v-bind:class="{ 'menu-clicked': toggleClass }"
  >
    {{ counter }}
    <div class="bar1"></div>
    <div class="invis"></div>
    <div class="bar3"></div>
  </button>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default {
  computed: mapState(["counter"]),
  data: () => {
    return {
      toggleClass: false,
    }
  },
  // fetch(context) is called by the server-side
  // and before instantiating the component
  fetch({ store }) {
    store.commit("increment");
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style scoped>
.hamburger-btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding-left: 30px;
}

.hamburger-btn:focus {
  outline: none;
}

.bar1,
.bar3 {
  width: 35px;
  height: 2px;
  background-color: #fdc760;
  margin: 6px 0;
  transition: 0.4s;
}

.invis {
  width: 35px;
  height: 2px;
  margin: 6px 0;
}

.menu-clicked .bar1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.menu-clicked .bar3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>