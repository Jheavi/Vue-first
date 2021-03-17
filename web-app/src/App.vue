<template>
  <div class="general-container">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    AppHeader,
    AppFooter
  },

  created () {
    this.getAllPosts()
  },

  methods: {
    ...mapActions(['getAllPosts'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.general-container {
  min-height: 90vh;
}
</style>
