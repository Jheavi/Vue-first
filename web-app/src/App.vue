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

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.general-container {
  min-height: 90vh;
}

button {
  margin: 10px;
  min-width: 100px;
  min-height: 30px;
  border: none;
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;

  &:focus {
    outline: 1px solid black;
  }
}
</style>
