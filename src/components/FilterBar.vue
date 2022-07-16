<template>
  <div class="filter-bar-view">
    <div class="search-container">
      <i class="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        class="search-input"
      />
    </div>
    <select
      class="filter-dropdown"
      v-model="filter"
      @change="selected"
      id="cars"
      name="cars"
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
    };
  },
  methods: {
    selected() {
      this.$store.state.filter = this.$store.state.data.filter((val) => {
        if (val.region == this.filter) {
          return val;
        }
      });
    },
  },
};
</script>

<style>
.filter-bar-view {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  height: 56px;
}

.search-container {
  background-color: white;
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 0 28px;
  border-radius: 10px;
  box-shadow: 0 0 10px lightgray;

  width: 33.2%;
}
.search-input {
  background-color: transparent;
  border: none;
}

.filter-dropdown {
  border: none;
  width: 15.5%;
  padding: 0 26px;
}
</style>