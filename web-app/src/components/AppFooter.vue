<template>
  <footer>
    <p>Copyright &copy; {{ year }}</p>
    <router-link
      to="/"
      class="link"
    >
      Home
    </router-link>
    <router-link
      to="/about"
      class="link"
    >
      About
    </router-link>
  </footer>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

export default defineComponent({
  name: 'AppFooter',
  setup (): { year: ComputedRef<number> } {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
})
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  margin: 0 10px;
}
</style>
