<template>
  <div class="filter-bar-view">
    <div class="search-container">
      <i class="fas fa-search"></i>
      <input
        type="text"
        v-model="searchText"
        @input="search"
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
      searchText: "",
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
    search() {
      this.$store.state.filter = this.$store.state.data.filter((val) => {
        if (val.name.toLowerCase().match(this.searchText.toLowerCase())) {
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

@media screen and (max-width: 1180px) {
  .filter-bar-view {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    margin: 50px 0;
    height: 126px;
  }
  .filter-dropdown {
    border: none;
    width: 50%;
    padding: 0 26px;
  }
  .search-container {
    width: 100%;
  }
}
</style>