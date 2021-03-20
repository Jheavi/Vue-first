<template>
  <div class="form">
    <div class="label-input">
      <label
        for="title"
        class="title"
      >
        Title:
      </label>
      <input
        id="title"
        v-model="title"
        class="title"
        type="text"
        size="60"
        placeholder="Insert a title"
      >
    </div>
    <div class="label-input">
      <label
        for="body"
        class="body"
      >
        Body:
      </label>
      <textarea
        id="body"
        v-model="body"
        name="body"
        cols="90"
        rows="8"
        placeholder="Insert a post"
      />
    </div>
    <button
      class="save-btn"
      @click="createPost"
    >
      Save Changes
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const title = ref('')
    const body = ref('')

    const createPost = () => {
      if (title.value.length > 2 && body.value.length > 10) {
        store.dispatch(
          'createPost',
          {
            body: body.value,
            title: title.value,
            id: store.state.posts[store.state.posts.length - 1].id + 1
          }
        )
      }
    }

    return {
      body,
      title,
      createPost
    }
  }
})
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-right: 20px;
}

.title {
  font-size: 20px;
}

.label-input {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.save-btn {
  background-color: #2b8600;
  color: white;
}
</style>
