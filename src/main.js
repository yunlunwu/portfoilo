import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// import store from './store'
// import i18n from './lang'
// import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

// Vue.use(VueAnalytics, {
//   id: 'UA-211701570-1',
//   router,
//   autoTracking: {
//     pageviewTemplate (route) {
//       return {
//         page: route.path,
//         title: 'pokerglory',
//         location: window.location.href
//       }
//     }
//   }
// })

new Vue({
  router,
  vuetify,
  // store,
  // i18n,
  render: h => h(App),
}).$mount('#app')
