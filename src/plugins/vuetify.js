import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import { MdiMenuOpen } from '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify);

Vue.component('mdi-menu-open', MdiMenuOpen)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // 默认值 - 仅用于展示目的
  },
});
