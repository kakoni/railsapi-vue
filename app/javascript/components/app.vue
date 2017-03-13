<template>
  <div id="app">
    <p>{{ message }}</p>
    <fetcher />
  </div>
</template>

<script>
import Fetcher from './fetcher.vue'

export default {
  components: { Fetcher },
  data() {
    return {
      message: "Hello Vue comp!"
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
