<template>
    <div class="flex-fill ms-3 me-1">
        <div class="mb-3">
            <h3 for="comentaryTextarea" class="form-label">Let us your comment</h3>
            <textarea v-model="commentary" class="form-control" id="comentaryTextarea" rows="3"></textarea>
        </div>
        <button @click="sendCommentary" type="button" class="btn btn-primary">Submit commentary</button>
    </div>
</template>

<script>
export default {
    data: () => ({
        comentary: ""
    }),
    props: {
        identifier: {
          Number
        }
    },
    methods: {
    sendCommentary() {
        this.$emit('body-comment', this.commentary);
        this.commentary = ""
    }
  }
}
</script>

