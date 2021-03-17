<template>
  <div class="center">
    <beat-loader v-if="postLoading" />
    <div
      v-else-if="post"
      class="post"
    >
      <h1 class="post__title">
        {{ postTitle }}
      </h1>
      <p class="post__body">
        {{ post.body }}
      </p>
      <p class="post__id">
        {{ post.id }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, toRef, onMounted } from 'vue'
import { useStore } from 'vuex'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'

export default {
  name: 'Post',
  components: {
    BeatLoader
  },
  props: {
    id: String
  },
  setup (props) {
    const store = useStore()
    const post = computed(() => store.state.post)
    const postLoading = computed(() => store.state.postLoading)

    const getPost = (id) => store.dispatch('getPost', id)
    const loadingPost = () => store.commit('loadingPost')

    const postTitle = computed(function () {
      return post.value.title?.slice(0, 1).toUpperCase() + post.value.title?.slice(1)
    })

    onMounted(() => {
      if (+props.id !== post.value.id) {
        loadingPost()
        getPost(+props.id)
      }
    })

    return {
      post,
      postLoading,
      postTitle
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
//     postTitle: function () {
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
</style>
