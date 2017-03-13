<template>
  <div id="result">
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      user: {name: null}
    }
  },

  created: function() {
    this.fetchData()
  },

  methods: {
    fetchData: function() {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', 'http://localhost:3000/api/v1/users')
      xhr.onload = function() {
        self.user = JSON.parse(xhr.responseText)
        console.log(self.user)
      }
      xhr.send()
    }
  }

}
</script>
