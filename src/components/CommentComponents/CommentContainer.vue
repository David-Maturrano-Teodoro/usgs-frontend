<template>
  <div class="comment-container text-bg-secondary">
    <View v-if="feature_data" :data="feature_data"></View>
    <div class="d-flex flex-row comment-body-container">
      <CommentForm :identifier="identifier" @body-comment="sendCommentary"></CommentForm>
      <Comments :comments="comments"></Comments>
    </div>
  </div>
</template>


<script>
import View from "./View.vue"
import Comments from "./Comments.vue"
import CommentForm from "./CommentForm.vue"
import axios from 'axios';

export default {
  components: {
    View,
    Comments,
    CommentForm
  },
  data: () => ({
    identifier: 0,
    feature_data: {
      "id": 0,
      "type": "",
      "attributes": {
          "external_id": "",
          "magnitude": 0,
          "place": "",
          "time": "",
          "tsunami": false,
          "mag_type": "",
          "title": "",
          "coordinates": {
              "longitude": 0,
              "latitude": 0
          }
      },
      "links": {
          "external_url": ""
      }
    },
    comments: []
  }),
  created() {
    this.executeRequest();
  },
  methods: {
    async executeRequest() {
      let url = "http://127.0.0.1:3000/api/features/" + this.$route.params.id
      try {
        const response = await axios.get(url);

        if (response.data.feature_data) {
          this.feature_data = response.data.feature_data;
          this.identifier = response.data.feature_data.id;
        }
        if (response.data.comments.length > 0){
          this.comments = response.data.comments;
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    },
    async sendCommentary(comment) {
      let url = "http://127.0.0.1:3000/api/features/"
      try {
        const response = await axios.post(url, {      
            "id": this.$route.params.id,
            "body": comment
        });
        this.executeRequest()
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
  }

  
}
</script>

<style scoped>
.comment-container {
  margin: 0px;
  height: 100vh;
}
</style>