<template>
  <nav class="nav-view" :class="{ dark: $store.state.theme }">
    <h1>Where in the world?</h1>
    <button
      @click="changeTheme"
      v-if="!$store.state.theme"
      class="theme-change"
    >
      <i class="far fa-moon"></i> Dark Mode
    </button>
    <button @click="changeTheme" v-if="$store.state.theme" class="theme-change">
      <i class="far fa-sun"></i> Light Mode
    </button>
  </nav>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      this.$store.state.theme = !this.$store.state.theme;
      console.log(this.$store.state.theme);
    },
  },
};
</script>

<style>
.nav-view {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 76px;
  padding: 0px 5.5%;
  box-shadow: 0 0 10px lightgray;
}

.nav-view.dark {
  background-color: var(--DarkBlueDarkModeElements);
  box-shadow: 0 0 10px black;
}
.nav-view.dark > * {
  color: white;
}

.nav-view > h1 {
  font-size: 1.5rem;
  font-weight: 800;
}

.nav-view > button {
  font-size: 1.1rem;
  font-weight: 800;
}
.theme-change {
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

@media screen and (max-width: 1180px) {
  .nav-view > h1 {
    font-size: 1.2rem;
    font-weight: 800;
  }

  .nav-view > button {
    font-size: 0.9rem;
    font-weight: 800;
  }
}
</style>