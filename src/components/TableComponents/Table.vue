<template>

  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Magnitude</th>
          <th>Place</th>
          <th>Time</th>
          <th>Type of Magnitude</th>
          <th>More Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in earthquakeData" :key="index">
          <td>{{ ((currentPage - 1) * perPages) + index + 1 }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.attributes.magnitude }}</td>
          <td>{{ item.attributes.place }}</td>
          <td>{{ item.attributes.time }}</td>
          <td>{{ item.attributes.mag_type }}</td>
          <th>
            <router-link :to="'/comment/' + item.id ">
              <button type="button" class="btn btn-primary">View & Comment</button>
            </router-link>
          </th>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

export default {
  props: {
        earthquakeData: {
            Array
        },
        perPages: {
            Number
        },
        currentPage: {
            Number
        }
  },
};
</script>


