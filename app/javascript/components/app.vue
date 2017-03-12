<template>
  <div id="app">
    <p>{{ message }}</p>
    <another />
  </div>
</template>

<script>
import Another from './another.vue'

export default {
  components: { Another },
  data() {
    return {
      message: "Hello Vue comp3!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
