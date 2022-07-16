<template>
  <div class="home-view">
    <FilterBar />
    <div class="cards-container">
      <Card v-for="country in data" :key="country" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import FilterBar from "../components/FilterBar.vue";

export default {
  data() {
    return {
      data: null,
    };
  },
  async created() {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
      });
  },
  async mounted() {
    console.log(this.data);
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
</style>