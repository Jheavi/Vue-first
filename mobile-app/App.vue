<template>
  <view class="container">
    <text class="text-color-primary">{{ name }} Vue Native App</text>
    <text-input v-model="name" id="name" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      name: 'Javi'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>

