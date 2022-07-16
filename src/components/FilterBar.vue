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
    <select class="filter-dropdown" id="cars" name="cars">
      <option value="">Filter by Region</option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style>
.filter-bar-view {
  display: flex;
  justify-content: space-between;
  padding: 0 5.4%;
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