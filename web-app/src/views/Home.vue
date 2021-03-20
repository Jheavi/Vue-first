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
  margin: 5px 0;
  text-align: left;
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
}

.off-link {
  text-decoration: none;
  color: #000000;

  &:visited {
    color: #000000;
  }
}
</style>
