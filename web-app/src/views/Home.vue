<template>
  <main>
    <aside class="sidebar" />
    <div class="content">
      <div class="buttons">
        <button @click="slicePosts">
          Slice list
        </button>
        <button @click="getAllPosts">
          Reload list
        </button>
        <router-link
          :to="{name: 'Create'}"
          class="off-link"
        >
          <button>
            Create post
          </button>
        </router-link>
      </div>
      <input
        v-model="searchQuery"
        class="search-bar"
        type="text"
        placeholder="Search by title"
      >
      <ul>
        <li :key="0">
          <router-link
            active-class="is-active"
            class="link"
            :to="{name: 'Post', params: { id: 0 }}"
          >
            Post numero 0
          </router-link>
        </li>
        <li
          v-for="post in posts"
          :key="post.id"
        >
          <router-link
            active-class="is-active"
            class="link"
            :to="{name: 'Post', params: { id: post.id}}"
          >
            {{ post.id }}. {{ post.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { Post } from '../interfaces/store'

export default defineComponent({
  name: 'Home',

  setup () {
    const store = useStore()
    const searchQuery = ref('')
    const posts = computed(() => (
      store.state.posts.filter((post: Post) => (
        post.title.includes(searchQuery.value)
      ))
    ))

    const slicePosts = () => store.commit('setPosts', posts.value.slice(0, 20))

    const setPosts = () => store.commit('setPosts')

    const getAllPosts = () => store.dispatch('getAllPosts')

    return {
      posts,
      setPosts,
      getAllPosts,
      slicePosts,
      searchQuery
    }
  }
})
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
  margin: 5px 0;
  text-align: left;
}

.search-bar {
  margin: 20px 0 5px;

  &:focus {
    outline: none;
  }
}

.buttons {
  display: flex;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link {
  text-decoration: none;
  color: #000000;
}

.off-link {
  text-decoration: none;
  color: #000000;

  &:visited {
    color: #000000;
  }
}
</style>
