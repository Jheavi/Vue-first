<template>
  <main>
    <aside class="sidebar" />
    <div class="content">
      <button @click="slicePosts">
        Update
      </button>
      <button @click="getAllPosts">
        Reload
      </button>
      <ul>
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
import { defineComponent } from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default defineComponent({
  name: 'Home',

  computed: {
    ...mapState(['posts'])
  },

  methods: {
    ...mapMutations(['setPosts']),
    ...mapActions(['getAllPosts']),

    slicePosts () {
      this.setPosts(this.posts.slice(0, 20))
    }
  }
})
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}
</style>
