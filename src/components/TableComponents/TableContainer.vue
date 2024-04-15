<template>
  <div class="table-container">
    <TableFilter @filter-changed="updateStateFilters"></TableFilter>
    <Table 
      :earthquakeData="earthquakeData"
      :perPages="perPage"
      :currentPage="currentPage"
    ></Table>
    <paginate
      :page-count="totalPages"
      :click-handler="updatePagination"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
    ></paginate>
  </div>

</template>

<script>
import Paginate from 'vuejs-paginate-next';
import TableFilter from "./TableFilter.vue"
import Table from "./Table.vue"
import axios from 'axios';

export default {
  components: {
    TableFilter,
    Table,
    Paginate
  },
  data: () => ({
    earthquakeData: [],
    currentPage: 1,
    perPage: 10,
    totalPages: 10,
    magnitudeType: "",
  }),
  created() {
    this.executeRequest();
  },
  methods: {
    updateStateFilters(filters) {
      this.perPage = filters.perPage,
      this.magnitudeType = filters.selectedType === "All"?"":filters.selectedType.toLocaleLowerCase()
      this.executeRequest()
    },

    updatePagination(page) {
      this.currentPage = page
      this.executeRequest()
    },

    async executeRequest() {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/features', {
          params: {
            page: this.currentPage,
            elements_per_page: this.perPage,
            mag_type: this.magnitudeType
          }
        });
        this.totalRecords = response.data.pagination.total * response.data.pagination.per_page
        this.earthquakeData = response.data.data;
        this.totalPages = response.data.pagination.total
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
  }
};
</script>

<style scoped>
.table-container {
  margin: 2rem;
}
</style>