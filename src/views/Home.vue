<template>
  <div class="home-view" v-if="$store.state.filter">
    <FilterBar />
    <div class="cards-container">
      <Card
        v-for="country in $store.state.filter"
        :key="country"
        :data="country"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import FilterBar from "../components/FilterBar.vue";

export default {
  async created() {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        this.$store.state.data = data;
        this.$store.state.filter = data;
      });
  },
  components: { FilterBar, Card },
};
</script>

<style>
.home-view {
  padding: 0 5.5%;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 338px;
  gap: 76px;
}

@media screen and (max-width: 1180px) {
  .home-view {
    padding: 0 10.5%;
  }
}
</style>