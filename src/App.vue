<template>
  <main>
    <NavBar />
    <router-view />
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  async created() {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        this.$store.state.data = data;
        this.$store.state.filter = data;
      });
  },
  components: { NavBar },
};
</script>

<style>
#app {
  background-color: var(--VeryLightGrayLightModeBackground);
}
</style>
