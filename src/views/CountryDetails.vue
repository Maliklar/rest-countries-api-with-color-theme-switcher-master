<template>
  <div class="country-details-view" v-if="$store.state.filter">
    <div class="back-bar">
      <button><i class="fa-solid fa-arrow-left"></i> Back</button>
    </div>

    <CountryDetailsBox :data="getCountry($route.params.id)" />
  </div>
</template>

<script>
import CountryDetailsBox from "../components/CountryDetailsBox.vue";
export default {
  components: { CountryDetailsBox },
  methods: {
    getCountry(code) {
      return this.$store.state.data.find((val) => {
        if (val.alpha3Code == code) {
          return val;
        }
      });
    },
  },
};
</script>

<style>
.country-details-view {
  padding: 0 5.6%;
}
.back-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 74px 0;
  height: 58px;
}
.back-bar > button {
  background-color: white;
  border: none;
  box-shadow: 0 0 8px lightslategray;
  border-radius: 5px;
  padding: 10px 46px;
}
</style>