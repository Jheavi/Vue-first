<template>
  <div class="center">
    <beat-loader v-if="postLoading" />
    <div
      v-else-if="post.title"
      class="post"
    >
      <input
        v-if="titleEditing"
        v-model="postTitle"
        type="text"
        class="input-title"
      >
      <h1
        v-else
        class="post__title"
      >
        {{ postTitleCapitalized }}
      </h1>
      <button
        class="edit-btn"
        @click="toggleEditTitle"
      >
        Edit title
      </button>
      <p class="post__id">
        id: {{ post.id }}
      </p>
      <textarea
        v-if="bodyEditing"
        v-model="postBody"
        class="textarea-body body"
        contenteditable="true"
      />
      <span
        v-else
        class="body"
      >
        {{ postBody }}
      </span>
      <button
        class="edit-btn"
        @click="toggleEditBody"
      >
        Edit body
      </button>
      <button
        v-if="bodyEditing || titleEditing"
        class="save-btn"
        @click="updatePost"
      >
        Save Changes
      </button>
      <button
        class="delete-btn"
        @click="toggleDeleteModalVisible"
      >
        Delete post
      </button>
    </div>
    <div v-else>
      <h1>There is no post with this id</h1>
    </div>
    <div
      v-if="deleteModalVisible"
      class="modal-mask"
    >
      <div
        class="delete-modal"
      >
        <span>Are you sure you want to delete the post?</span>
        <div class="horizontal-buttons">
          <button
            class="delete-btn"
            @click="deleteAndCloseModal"
          >
            Accept
          </button>
          <button
            class="cancel-btn"
            @click="toggleDeleteModalVisible"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'

export default {
  name: 'Post',
  components: {
    BeatLoader
  },
  props: {
    id: { type: String, default: '0' }
  },
  setup (props) {
    const store = useStore()
    const router = useRouter()
    const post = computed(() => store.state.post)
    const postBody = ref(post?.value.body)
    const postTitle = ref(post?.value.title)
    const bodyEditing = ref(false)
    const titleEditing = ref(false)
    const deleteModalVisible = ref(false)
    const postLoading = computed(() => store.state.postLoading)
    const postTitleCapitalized = computed(() => {
      return postTitle?.value?.slice(0, 1).toUpperCase() +
      postTitle?.value?.slice(1)
    })

    const getPost = (id) => store.dispatch('getPost', id)
    const deletePost = (id) => store.dispatch('deletePost', id)
    const loadingPost = () => store.commit('loadingPost')
    const updatePost = () => {
      store.dispatch('updatePost', {
        ...post.value,
        body: postBody.value,
        title: postTitle.value
      })
      bodyEditing.value = false
      titleEditing.value = false
    }

    watch(post, () => {
      postTitle.value = post.value.title
      postBody.value = post.value.body
    })

    const toggleEditBody = () => {
      bodyEditing.value = !bodyEditing.value
    }

    const toggleEditTitle = () => {
      titleEditing.value = !titleEditing.value
    }

    const toggleDeleteModalVisible = () => {
      deleteModalVisible.value = !deleteModalVisible.value
    }

    const deleteAndCloseModal = () => {
      toggleDeleteModalVisible()
      deletePost(post.value.id)
      router.push({ name: 'Home' })
    }

    onMounted(() => {
      if (+props.id !== post.value.id) {
        loadingPost()
        getPost(+props.id)
      }
    })

    return {
      post,
      postLoading,
      postTitle,
      postTitleCapitalized,
      postBody,
      bodyEditing,
      toggleEditBody,
      updatePost,
      titleEditing,
      toggleEditTitle,
      deleteModalVisible,
      toggleDeleteModalVisible,
      deleteAndCloseModal
    }
  }
}

// export default defineComponent({
//   name: 'Post',
//   components: {
//     BeatLoader
//   },
//   props: ['id'],
//   computed: {
//     ...mapState(['post', 'postLoading']),
//     postTitleCapitalized: function () {
//       return this.post?.title?.slice(0, 1).toUpperCase() + this.post?.title?.slice(1)
//     }
//   },
//   created () {
//     this.loadingPost()
//     this.getPost(this.id)
//   },
//   methods: {
//     ...mapActions(['getPost']),
//     ...mapMutations(['loadingPost'])
//   }
// })
</script>

<style lang="scss" scoped>

.center {
  width: 100%;
  display: flex;
  justify-content: center;
}

.post {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.textarea-body {
  width: 80vh;
  height: 100px;
  border: none;
  overflow-y: auto;
  margin: 10px 0 30px;
}

.body {
  padding: 16px 0;
}

button {
  color: white;
}

.edit-btn {
  background-color: #0890ff;
}

.save-btn {
  background-color: #2b8600;
}

.delete-btn {
  background-color: #cf0000;
}

.cancel-btn {
  color: black;
}

.input-title {
  font-size: 25px;
  font-weight: bold;
  width: 500px;
  text-align: center;
}

.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000bb;
  transition: opacity .3s ease;

}

.delete-modal {
  position: absolute;
  width: 400px;
  height: 200px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
