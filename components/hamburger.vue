<template>
  <!-- increment() is our function to commit the state to the store  -->
  <!-- toggleClass; is handling our click class to handle the CSS animations -->
  <button
    class="hamburger-btn"
    @click="increment(); toggleClass = !toggleClass"
    v-bind:class="{ 'menu-clicked': toggleClass }"
  >
    <!-- Displaying that we are grabbing and counting each click.  -->
    {{ counter }}
    <!-- Render bars for menu -->
    <div class="bar1"></div>
    <!-- Need invisible-bar to handle proper spacing on animation. -->
    <div class="invisible-bar"></div>
    <div class="bar3"></div>
  </button>
</template>

<script>
// Import mapState function to update state
import { mapState } from "vuex"

export default {
  // Update state with the amount
  // of button presses.
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
    // Commit new state to the store
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style scoped>
/* Default Menu Button stlyes */
.hamburger-btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding-left: 30px;
}

/* Remove outline on focus */
.hamburger-btn:focus {
  outline: none;
}

/* Default Menu stlyes */
.bar1,
.bar3 {
  width: 35px;
  height: 2px;
  background-color: #fdc760;
  margin: 6px 0;
  transition: 0.4s;
}

/* Position invisible space */
.invisible-bar {
  width: 35px;
  height: 2px;
  margin: 6px 0;
}

/* Toggle animation rotation on click */
.menu-clicked .bar1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.menu-clicked .bar3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>