<template>
  <div class="country-details-view" v-if="$store.state.filter">
    <div class="filter-bar-view">
      <button><i class="fa-solid fa-arrow-left"></i> Back</button>
    </div>

    <CountryDetailsBox :data="$store.state.filter[+$route.params.id]" />
  </div>
</template>

<script>
import CountryDetailsBox from "../components/CountryDetailsBox.vue";
export default {
  components: { CountryDetailsBox },
};
</script>

<style>
.country-details-view {
  padding: 0 5.6%;
}
.filter-bar-view {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 74px 0;
  height: 58px;
}
.filter-bar-view > button {
  background-color: white;
  border: none;
  box-shadow: 0 0 8px lightslategray;
  border-radius: 5px;
  padding: 10px 46px;
}
</style>