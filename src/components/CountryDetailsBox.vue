<template>
  <div class="details-box-view">
    <div class="flag-container">
      <img :src="data.flag" alt="" />
    </div>
    <div>
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
        <button v-for="country in data.borders" :key="country">
          {{ country }}
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
  created() {
    console.log(this.data);
  },
};
</script>

<style>
.details-box-view {
  display: flex;
  gap: 120px;
}

.flag-container {
  width: 560px;
  height: 400px;
  overflow: hidden;
}
.flag-container > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.country-details-box {
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
}

.bottom {
  display: flex;
  align-items: center;

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
</style>