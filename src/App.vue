<template>
  <main :class="{ dark: $store.state.theme }">
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
main {
  min-height: 100vh;
  background-color: var(--VeryLightGrayLightModeBackground);
}
main.dark {
  background-color: var(--VeryDarkBlueDarkModeBackground);
}
</style>
