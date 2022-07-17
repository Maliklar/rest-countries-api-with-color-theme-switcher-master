<template>
  <div class="details-box-view">
    <div class="flag-container">
      <img :src="data.flag" :alt="data.name" />
    </div>
    <div :class="{ dark: $store.state.theme }">
      <h1>{{ data.name }}</h1>
      <div class="country-details-box">
        <p><strong>Native Name</strong> {{ data.nativeName }}</p>
        <p><strong>Population</strong> {{ data.population }}</p>
        <p><strong>Region</strong> {{ data.region }}</p>
        <p><strong>Sub Region</strong> {{ data.subregion }}</p>
        <p><strong>Capital</strong> {{ data.capital }}</p>
        <p><strong>Top Level Domain</strong> {{ data.topLevelDomain[0] }}</p>
        <p>
          <strong>Currencies</strong>
          <span v-for="curr in data.currencies" :key="curr">
            &nbsp; {{ curr.name }},</span
          >
        </p>
        <p>
          <strong>Languages</strong>
          <span v-for="lang in data.languages" :key="lang">
            &nbsp;{{ lang.name }},</span
          >
        </p>
      </div>
      <div class="bottom">
        <strong>Border Countries</strong>
        <button
          :class="{ dark: $store.state.theme }"
          v-for="country in data.borders"
          :key="country"
          @click="goTo(country)"
        >
          {{ getCountry(country).name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    getCountry(code) {
      return this.$store.state.data.find((val) => {
        return val.alpha3Code == code;
      });
    },
    goTo(code) {
      this.$router.push({
        path:
          "/rest-countries-api-with-color-theme-switcher-master/country/" +
          code,
      });
    },
  },
};
</script>

<style>
.details-box-view {
  display: flex;
  gap: 120px;
}

.flag-container {
  min-width: 560px;
  max-width: 560px;
  overflow: hidden;
}
.flag-container > img {
  width: 100%;
}
.country-details-box {
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
}

.dark {
  color: white;
}

.bottom {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
}

.bottom > button {
  border: none;
  background-color: white;
  box-shadow: 0 0 5px lightslategray;
  padding: 0.5em 2em;
  border-radius: 5px;
}

button.dark {
  background-color: var(--DarkBlueDarkModeElements);
  box-shadow: 0 0 10px black;
  color: white;
}

@media screen and (max-width: 1180px) {
  .details-box-view {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }

  .flag-container {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .country-details-box {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 34px;
    flex-wrap: wrap;
  }
}
</style>