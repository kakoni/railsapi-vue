/* eslint no-console:0 */
import Vue from 'vue'
import App from 'components/app.vue'
import Turbolinks from 'turbolinks'

Turbolinks.start()

document.body.appendChild(document.createElement('hello'))

new Vue({
  el: 'hello',
  // template: '<app/>',
  // components: { App, Another }
  render: h => h(App)
})
