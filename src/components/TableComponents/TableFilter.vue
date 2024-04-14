<template>
  <div class="d-flex flex-row justify-content-evenly flex-wrap">
    <div class="d-flex flex-row flex-fill me-1">
      <label for="perPageSelect" class="form-label">Elements per page:</label>
      <select class="form-select" v-model="perPage" id="perPageSelect" @change="filterData">
        <option 
        v-for="(option,index) in perPageOptions" 
        :value="option" 
        :key="index">
          {{ option }}
        </option>
      </select>
    </div>
    
    <div class="d-flex flex-row flex-fill ms-1">
      <label  for="typeSelect" class="form-label">Filter per type:</label>
      <select class="form-select" v-model="selectedType" id="typeSelect" @change="filterData">
        <option 
        v-for="(type_magnitude,index) in types_of_magnitude" 
        :value="type_magnitude" 
        :key="index">
          {{ type_magnitude }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data:() =>  ({
    perPage: 10,
    perPageOptions: [10, 100, 1000],
    selectedType: "All",
    types_of_magnitude: ["All","MD","ML","MS","MW","ME","MI","MB","MLG"]
  }),
  methods: {
    filterData() {
      this.$emit('filter-changed', {
        perPage: this.perPage,
        selectedType: this.selectedType
      });
    }
  }
};
</script>
