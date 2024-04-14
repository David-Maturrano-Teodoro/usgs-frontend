<template>
    <div class="flex-fill p-2 ms-1 me-3">
      <div class="comment-list">

        <div v-if="comments.length == 0" class="no-comments">
          <h1>No comments</h1>
        </div>
        <div
            v-for="(comment,key) in comments"
            :key="key"
            class="card text-bg-light mx-3 my-2"
            style="max-width: 100%;"
        >
        <div class="card-header">{{ formattedCreatedAt(comment.created_at) }}</div>
        <div class="card-body">
            <p class="card-text">{{ comment.Comm_Body }}</p>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
import { format } from 'date-fns';
export default {
    props: {
        comments: {
          Array
        }
    },
    methods: {
    formattedCreatedAt(date) {
      return format(new Date(date), 'dd/MM/yyyy HH:mm:ss'); 
    }
  }
}
</script>

<style scoped>
.comment-list {
  height: 300px;
  overflow:auto
}
.no-comments {
  max-width: 100%;
  text-align: center;
  margin-top: 3rem;
}
</style>