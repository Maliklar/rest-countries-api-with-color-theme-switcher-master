<template>
  <div class="country-details-view" v-if="$store.state.data">
    <div class="back-bar" @click="back">
      <button @click="$router.go(-1)" :class="{ dark: $store.state.theme }">
        <i class="fa-solid fa-arrow-left"></i> Back
      </button>
    </div>
    <CountryDetailsBox :data="getCountry($route.params.id)" />
  </div>
  <Loading v-else />
</template>

<script>
import CountryDetailsBox from "../components/CountryDetailsBox.vue";
import Loading from "../components/Loading.vue";
export default {
  components: { CountryDetailsBox, Loading },
  name: "CountryDetails",
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