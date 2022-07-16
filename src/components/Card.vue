<template>
  <div class="card">
    <img
      class="flag-img"
      @click="goTo(data.alpha3Code)"
      :src="data.flag"
      :alt="data.name"
    />
    <div class="country-details">
      <h1>{{ data.name }}</h1>
      <p><strong>Population:</strong> {{ data.population }}</p>
      <p><strong>Region:</strong> {{ data.region }}</p>
      <p><strong>Capital:</strong> {{ data.capital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    goTo(code) {
      this.$router.push({
        path: "/country/" + code,
      });
    },
  },
};
</script>

<style>
p {
  margin: 0px;
}
.card {
  background-color: white;
  position: relative;
  box-shadow: 0 0 10px lightslategray;
  border-radius: 10px;
  overflow: hidden;
}
.flag-img {
  width: 100%;
  height: 47%;
  object-fit: cover;
}

.country-details {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.country-details > h1 {
  font-size: 1.2rem;
  margin-top: 0px;
}
.country-details > p {
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}
</style>